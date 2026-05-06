import { useEffect, useState } from 'react';
import { doctorsServices } from '../services/services';
import { GetCurrentDoctorType } from '../types';
import { Medecin } from '@clicMedic/api/types';
import { isValidToken } from '@clicMedic/api/utils';

export const useDoctorProfileData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [doctor, setDoctor] = useState<Medecin>({} as Medecin);
  const token = localStorage.getItem('accessToken');
  useEffect(() => {
    const getDoctor = async () => {
      try {
        setLoading(true);
        if (isValidToken(token)) {
          const data: GetCurrentDoctorType =
            await doctorsServices.getCurrentDoctor(token);

          if (data.medecins && data.medecins.length > 0) {
            setDoctor(data.medecins[0]);
          }
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
