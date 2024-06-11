import './signup.css';
import { Formik } from 'formik';
import { SignUpFormBase, SignUpType } from './signup-form-base';
import { useContext } from 'react';
import { appContext } from '../app/app';

export const SignUp = () => {
  const context = useContext(appContext);
  const initialValues: SignUpType = {
    email: '',
    firstName: '',
    gender: '',
    lastName: '',
    socialHealthNumber: '',
  };

  const handleSubmit = (values: SignUpType) => {
    console.log(values, 'values');
    context?.setShowSignUpForm(false);
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(props) => {
          return <SignUpFormBase {...props} />;
        }}
      </Formik>
    </>
  );
};
