import { useState } from 'react';
import { Patient } from '../../../api/types';
import { doctorsServices } from '../services/services';
import { FetchPatientsType } from '../types';

export const useDoctorData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [patients, setPatients] = useState<Patient[]>([]);
  const token = localStorage.getItem('accessToken');
  const fetchPatient = async () => {
    try {
      setLoading(true);
      if (token !== null) {
        const data: FetchPatientsType = await doctorsServices.fetchPatient(
          token
        );
        setPatients(data.patients);
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
    patients,
  };
};
