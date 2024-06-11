import './login.css';
import { Formik } from 'formik';

import { LoginFormBase, LoginType } from './login-form-base';

export const Login = () => {
  const initialValues: LoginType = { email: '', password: '' };

  const handleSubmit = (values: LoginType) => {
    console.log(values, 'values');
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
