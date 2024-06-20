import './signup.css';
import { Formik } from 'formik';
import { SignUpFormBase } from './signup-form-base';
import { useContext } from 'react';
import { appContext } from '../app/app';
import { SignUpType, initialValues } from './signup.definitions';
import { signup } from './signup.services';

export const SignUp = () => {
  const context = useContext(appContext);

  const handleSubmit = (values: SignUpType) => {
    const execute = async () => {
      await signup(values);
    };
    execute();
    console.log(values, 'values');
    //context?.setShowSignUpForm(false);
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
