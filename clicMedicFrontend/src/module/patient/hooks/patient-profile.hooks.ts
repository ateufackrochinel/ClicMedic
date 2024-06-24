import { useEffect, useState } from 'react';
import { Patient } from '../../../api/types';
import { patientServices } from '../services';
import { GetCurrentPatientType } from '../types';

export const usePatientProfileData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [patient, setPatient] = useState<Patient>({} as Patient);
  const token = localStorage.getItem('accessToken');
  useEffect(() => {
    const getPatient = async () => {
      try {
        setLoading(true);
        if (token !== null) {
          const data: GetCurrentPatientType =
            await patientServices.getCurrentPatient(token);

          setPatient(data.patients[0]);
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
