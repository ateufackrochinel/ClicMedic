import { useState } from 'react';
import { doctorsServices } from '../services';
import { GetHoraireInputType, HoraireType } from '../types';

export const useHoraireMedecinData = ({
  medecinId,
  endDate,
  startDate,
}: GetHoraireInputType) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [horaires, setHoraires] = useState<HoraireType[]>([]);
  const token = localStorage.getItem('accessToken');
  const fetchPatient = async () => {
    try {
      setLoading(true);
      if (token !== null) {
        const data: HoraireType[] = await doctorsServices.getHoraireDoctor({
          medecinId,
          endDate,
          startDate,
        });
        setHoraires(data);
      }
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    fetchPatient,
    horaires,
  };
};
