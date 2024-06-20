import './signup.css';
import { Formik } from 'formik';
import { SignUpFormBase } from './signup-form-base';
import { useContext } from 'react';
import { appContext } from '../app/app';
import { SignUpType } from './signup.definitions';

export const SignUp = () => {
  const context = useContext(appContext);
  const initialValues: SignUpType = {
    type: 'patient',
    accountDetails: {
      email: '',
      nom: '',
      gender: '',
      prenom: '',
      numeroAssuranceMaladie: '',
      dateNaissance: '',
      telephone: '',
    },
  };

  const handleSubmit = (values: SignUpType) => {
    const execute = async () => {
      fetch(`http://localhost:8080/auth/create-account`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
    };
    execute();
    console.log(values, 'values');
    // context?.setShowSignUpForm(false);
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
