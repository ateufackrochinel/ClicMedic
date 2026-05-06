import { useEffect, useState } from 'react';
import { Patient } from '@clicMedic/api/types';
import { patientServices } from '../services';
import { GetCurrentPatientType } from '../types';
import { isValidToken } from '@clicMedic/api/utils';

export const usePatientProfileData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [patient, setPatient] = useState<Patient>({} as Patient);
  const token = localStorage.getItem('accessToken');
  useEffect(() => {
    const getPatient = async () => {
      try {
        setLoading(true);
        if (isValidToken(token)) {
          const data: GetCurrentPatientType =
            await patientServices.getCurrentPatient(token);

          if (data.patients && data.patients.length > 0) {
            setPatient(data.patients[0]);
          }
        }
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };
    getPatient();
  }, []);

  return {
    loading,
    error,
    patient,
  };
};
