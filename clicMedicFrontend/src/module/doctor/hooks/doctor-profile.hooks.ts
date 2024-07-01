import { useEffect, useState } from 'react';
import { doctorsServices } from '../services/services';
import { GetCurrentDoctorType } from '../types';
import { Medecin } from '../../../api/types';

export const useDoctorProfileData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [doctor, setDoctor] = useState<Medecin>({} as Medecin);
  const token = localStorage.getItem('accessToken');
  useEffect(() => {
    const getDoctor = async () => {
      try {
        setLoading(true);
        if (token !== null) {
          const data: GetCurrentDoctorType =
            await doctorsServices.getCurrentDoctor(token);

          setDoctor(data.medecins[0]);
        }
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };
    getDoctor();
  }, []);

  return {
    loading,
    error,
    doctor,
  };
};
