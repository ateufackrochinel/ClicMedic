import { Medecin, Patient } from '../../api/types';

export type FetchPatientsType = { patients: Patient[] };
export type GetCurrentDoctorType = { medecins: Medecin[] };
export type GetHoraireType = {
  horaire: HoraireType[];
};
export type GetHoraireInputType = {
  token?: string;
  medecinId: string;
  startDate: string;
  endDate: string;
};
export type RapportType = {
  id: string;
  dateModification: string;
  contenu: string;
};

export type HoraireType = {
  id: string;
  titre: string;
  lieu: string;
  patient: Patient;
  medecin: Medecin;
  tempsDebut: string;
  duree: number;
  notes: string;
  rapport: RapportType;
};

export type RendezVousMedecinType = {
  titre: string;
  lieu: string;
  patientId: string;
  debut: string;
  duree: number;
  notes: string;
};
