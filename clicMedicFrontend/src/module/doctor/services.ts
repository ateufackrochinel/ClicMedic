import { Patient } from '../../api/types';
import { get } from '../../api/utils';
import {
  FetchPatientsType,
  GetCurrentDoctorType,
  GetHoraireInputType,
  GetHoraireType,
  HoraireType,
} from './types';

const fetchPatient = async (token: string): Promise<FetchPatientsType> => {
  return await get<FetchPatientsType>('/clicmedic/patients', { token });
};
const getCurrentDoctor = async (
  token: string
): Promise<GetCurrentDoctorType> => {
  return await get<GetCurrentDoctorType>('/clicmedic/medecin', { token });
};
const getHoraireDoctor = async ({
  token,
  medecinId,
  endDate,
  startDate,
}: GetHoraireInputType): Promise<HoraireType[]> => {
  return await get<HoraireType[]>(
    `/medecin/horaire/${medecinId}?startDate=${startDate}&endDate=${endDate}`,
    {
      token,
    }
  );
};

export const doctorsServices = {
  fetchPatient,
  getCurrentDoctor,
  getHoraireDoctor,
};
