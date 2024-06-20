import { string } from 'yup';

export const initialValues: SignUpType = {
  type: 'patient',
  accountDetails: {
    email: '',
    nom: '',
    prenom: '',
    numeroAssuranceMaladie: '',
    dateNaissance: '',
    telephone: '',
    mdp: '',
    numeroEmploye: '',
    NIMC: '',
    telephoneBureau: '',
    lieuTravail: '',
    specialisation: '',
  },
};

export type AccountDetails = {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  mdp: string;
  numeroAssuranceMaladie?: string;
  dateNaissance?: string;
  specialisation?: string;
  numeroEmploye?: string;
  telephoneBureau?: string;
  lieuTravail?: string;
  NIMC?: string;
};

export type SpecialtiesType = {
  id: string;
  nom: string;
  description: string;
  needGreenlight: boolean;
};
export type SignUpType = {
  type: string;
  accountDetails: AccountDetails;
};
