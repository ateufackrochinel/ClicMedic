import './login.css';
import { Formik } from 'formik';
import { LoginFormBase } from './login-form-base';
import { LoginType } from '../../types';

import { useLogin } from '../../hooks/login.hooks';

export const Login = () => {
  const initialValues: LoginType = {
    userType: '',
    mdp: '',
    identifiant: '',
  };
  const { error, loading, login } = useLogin();

  const handleSubmit = (values: LoginType) => {
    login(values);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(props) => {
          return <LoginFormBase {...props} />;
        }}
      </Formik>
    </>
  );
};
