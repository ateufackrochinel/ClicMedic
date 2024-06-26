import { Medecin, Patient } from '../../api/types';

export type FetchMedecinsType = { medecins: Medecin[] };
export type GetCurrentPatientType = { patients: Patient[] };
export type RendezVousPatientType = {
  titre: string;
  lieu: string;
  medecinId: string;
  debut: string;
  duree: number;
  notes: string;
};
