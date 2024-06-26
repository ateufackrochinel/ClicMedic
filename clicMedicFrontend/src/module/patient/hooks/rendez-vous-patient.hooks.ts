import { useState } from 'react';

import { patientServices } from '../services';
import { RendezVousPatientType } from '../types';

export const useRendezVousPatientData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const token = localStorage.getItem('accessToken');

  const rendezVousPatient = async (body: RendezVousPatientType) => {
    try {
      setLoading(true);
      if (token !== null) {
        const data = await patientServices.rendezVousPatient(token, body);
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
    rendezVousPatient,
  };
};
