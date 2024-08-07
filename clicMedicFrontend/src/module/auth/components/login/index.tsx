import './login.css';
import { Formik } from 'formik';
import { useAppContext } from '@clicMedic/components/app/contextController';
import { LoginFormBase } from './login-form-base';
import { LoginType } from '../../types';
import { useLogin } from '../../hooks/login.hooks';
import { initialValues, validationSchema } from './login.definitions';

export const Login = () => {
  const { error, loading, login } = useLogin();
  const { toggle, showSignUpForm } = useAppContext();

  const handleSubmit = (values: LoginType) => {
    login(values);
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something wrong</div>;
  }

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {(props) => {
          return <LoginFormBase {...props} />;
        }}
      </Formik>

      {!showSignUpForm && (
        <div>
          No account :{' '}
          <label className="AppUI-signUpLabel" onClick={() => toggle(true)}>
            Sign up
          </label>
        </div>
      )}
    </>
  );
};
