import './login.css';
import { Formik } from 'formik';

import { LoginFormBase, LoginType } from './login-form-base';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const initialValues: LoginType = { email: '', password: '' };

  const handleSubmit = (values: LoginType) => {
    console.log(values, 'values');
    navigate('/patient');
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
