import { Patient } from '../../api/types';
import { get, post } from '../../api/utils';
import { responseAuthType } from '../auth/types';

import {
  FetchMedecinsType,
  GetCurrentPatientType,
  RendezVousPatientType,
} from './types';

const fetchMedecin = async (token: string): Promise<FetchMedecinsType> => {
  return await get<FetchMedecinsType>('/clicmedic/medecin', { token });
};

const getCurrentPatient = async (
  token: string
): Promise<GetCurrentPatientType> => {
  return await get<GetCurrentPatientType>('/clicmedic/patients', { token });
};

const rendezVousPatient = async (
  token: string,
  body: RendezVousPatientType
): Promise<responseAuthType> => {
  return await post<responseAuthType>('/clicmedic/rendez-vous/patient', {
    token,
    body,
  });
};

export const patientServices = {
  fetchMedecin,
  getCurrentPatient,
  rendezVousPatient,
};
