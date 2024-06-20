import './login.css';
import { Formik } from 'formik';

import { LoginFormBase, LoginType } from './login-form-base';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { login } from './login.services';

export const Login = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState<{ token: string }>({ token: '' });
  const initialValues: LoginType = {
    userType: '',
    mdp: '',
    identifiant: '',
  };

  const handleSubmit = (values: LoginType) => {
    const execute = async () => {
      const response = await login(values);
      console.log(response, 'response');
      setToken(response);
    };
    execute();

    console.log(token, 'token');
    //navigate('/patient');
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
