import { get, post } from '../../api/utils';
import { SpecialtiesType, responseAuthType } from '../auth/types';
import {
  FetchPatientsType,
  GetCurrentDoctorType,
  GetHoraireInputType,
  GetHoraireType,
  RendezVousMedecinType,
} from './types';

const fetchPatient = async (token: string): Promise<FetchPatientsType> => {
  return await get<FetchPatientsType>('/clicmedic/patients', { token });
};

const getCurrentDoctor = async (
  token: string
): Promise<GetCurrentDoctorType> => {
  return await get<GetCurrentDoctorType>('/clicmedic/medecin', { token });
};

const rendezVousMedecin = async (
  token: string,
  body: RendezVousMedecinType
): Promise<responseAuthType> => {
  return await post<responseAuthType>('/clicmedic/rendez-vous/medecin', {
    token,
    body,
  });
};

const getHoraireDoctor = async ({
  token,
  medecinId,
  endDate,
  startDate,
}: GetHoraireInputType): Promise<GetHoraireType> => {
  return await get<GetHoraireType>(
    `/clicmedic/medecin/horaire/${medecinId}?startDate=${startDate}&endDate=${endDate}`,
    {
      token,
    }
  );
};

const getSpecialties = async (): Promise<{
  specialites: SpecialtiesType[];
}> => {
  return await get<{ specialites: SpecialtiesType[] }>(
    '/clicmedic/specialites',
    {}
  );
};

export const doctorsServices = {
  fetchPatient,
  getCurrentDoctor,
  getHoraireDoctor,
  rendezVousMedecin,
  getSpecialties,
};
