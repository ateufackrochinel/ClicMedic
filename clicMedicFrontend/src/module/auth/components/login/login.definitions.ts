import * as Yup from 'yup';
import { LoginType } from '../../types';

export const initialValues: LoginType = {
  userType: '',
  mdp: '',
  identifiant: '',
};

export const validationSchema = Yup.object().shape({
  mdp: Yup.string().required('Password is required'),
  identifiant: Yup.string().required('Identifier is required'),
  userType: Yup.string(),
});
