import { Patient } from '../../api/types';
import { get } from '../../api/utils';
import { FetchMedecinsType, GetCurrentPatientType } from './types';

const fetchMedecin = async (token: string): Promise<FetchMedecinsType> => {
  return await get<FetchMedecinsType>('/clicmedic/medecin', { token });
};
const getCurrentPatient = async (
  token: string
): Promise<GetCurrentPatientType> => {
  return await get<GetCurrentPatientType>('/clicmedic/patients', { token });
};

export const patientServices = {
  fetchMedecin,
  getCurrentPatient,
};
