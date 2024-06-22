import { string } from 'yup';
import { SignUpType } from '../../types';

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
