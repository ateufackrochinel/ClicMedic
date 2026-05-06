import { useState } from 'react';
import { doctorsServices } from '../services/services';
import { RendezVousMedecinType } from '../types';
import { isValidToken } from '@clicMedic/api/utils';

export const useRendezVousMedecinData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const token = localStorage.getItem('accessToken');

  const rendezVousMedecin = async (body: RendezVousMedecinType) => {
    try {
      setLoading(true);
      if (isValidToken(token)) {
        await doctorsServices.rendezVousMedecin(token, body);
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
