import './login.css';
import { Formik } from 'formik';

import { LoginFormBase, LoginType } from './login-form-base';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const initialValues: LoginType = { email: '', password: '' };

  const handleSubmit = (values: LoginType) => {
    const execute = async () => {
      fetch(`${process.env.REACT_APP_CLIC_MEDIC_API_URL}/`, {
        method: 'POST',
        headers: {
          Authorization: `JWT `,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
    };
    execute();
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
