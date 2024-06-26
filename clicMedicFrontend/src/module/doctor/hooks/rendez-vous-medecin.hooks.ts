import { useState } from 'react';
import { Patient } from '../../../api/types';
import { doctorsServices } from '../services';
import { FetchPatientsType, RendezVousMedecinType } from '../types';

export const useRendezVousMedecinData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const token = localStorage.getItem('accessToken');
  console.log(token, 'token');
  const rendezVousMedecin = async (body: RendezVousMedecinType) => {
    try {
      setLoading(true);
      if (token !== null) {
        const data = await doctorsServices.rendezVousMedecin(token, body);
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
    rendezVousMedecin,
  };
};
