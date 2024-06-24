import { Medecin, Patient } from '../../api/types';

export type FetchPatientsType = { patients: Patient[] };
export type GetCurrentDoctorType = { medecins: Medecin[] };
export type GetHoraireType = {
  horaires: HoraireType;
};
export type GetHoraireInputType = {
  token?: string;
  medecinId: string;
  startDate: string;
  endDate: string;
};

export type HoraireType = {
  id: string;
  titre: string;
  lieu: string;
  patient: Patient;
};
