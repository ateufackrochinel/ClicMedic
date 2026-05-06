import { useState } from 'react';
import { Medecin } from '@clicMedic/api/types';
import { patientServices } from '../services';
import { FetchMedecinsType } from '../types';
import { isValidToken } from '@clicMedic/api/utils';

export const usePatientData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [medecins, setMedecins] = useState<Medecin[]>([]);
  const token = localStorage.getItem('accessToken');
  const fetchMedecin = async () => {
    try {
      setLoading(true);
      if (isValidToken(token)) {
        const data: FetchMedecinsType = await patientServices.fetchMedecin(
          token
        );
        setMedecins(data.medecins);
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
    fetchMedecin,
    medecins,
  };
};
