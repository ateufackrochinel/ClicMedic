import * as Yup from 'yup';
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

export const validationSchema = Yup.object<SignUpType>().shape({
  type: Yup.string().required('Required'),
  accountDetails: Yup.object().shape({
    email: Yup.string().email().required('required'),
    nom: Yup.string().required('required'),
    prenom: Yup.string().required('required'),
    numeroAssuranceMaladie: Yup.string().required('required'),
    dateNaissance: Yup.string().required('required'),
    telephone: Yup.string().required('required'),
    mdp: Yup.string().min(6).required('required'),
    numeroEmploye: Yup.string().required('required'),
    NIMC: Yup.string().min(12).required('required'),
    telephoneBureau: Yup.string().required('required'),
    lieuTravail: Yup.string().required('required'),
    specialisation: Yup.string().required('required'),
  }),
});
