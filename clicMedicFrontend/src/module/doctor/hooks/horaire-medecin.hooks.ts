import { useState } from 'react';
import { doctorsServices } from '../services/services';
import { GetHoraireInputType, GetHoraireType, HoraireType } from '../types';

export const useHoraireMedecinData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [horaires, setHoraires] = useState<HoraireType[]>([]);
  const token: string | null = localStorage.getItem('accessToken');
  const getHoraireMedecin = async ({
    medecinId,
    endDate,
    startDate,
  }: GetHoraireInputType) => {
    try {
      setLoading(true);
      if (token !== null) {
        const data: GetHoraireType = await doctorsServices.getHoraireDoctor({
          medecinId,
          endDate,
          startDate,
        });
        setHoraires(data.horaire);
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
    getHoraireMedecin,
    horaires,
  };
};
