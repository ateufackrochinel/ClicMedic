import * as Yup from 'yup';
import { LoginType } from '../../types';

export const initialValues: LoginType = {
  userType: '',
  mdp: '',
  identifiant: '',
};

export const validationSchema = Yup.object().shape({
  mdp: Yup.string().required('Required'),
  identifiant: Yup.string().required('Required'),
  userType: Yup.string(),
});
