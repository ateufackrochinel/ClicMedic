import './signup.css';
import { Formik } from 'formik';
import { SignUpFormBase } from './signup-form-base';

import {
  initialValues,
  validationSchemaMedecin,
  validationSchemaPatient,
} from './signup.definitions';
import { SignUpType } from '../../types';
import { useSignup } from '../../hooks/signup.hooks';
import { useAppContext } from '@clicMedic/components/app/contextController';
import { useUserStrategy } from '../../hooks/useUserStrategy';

export const SignUp = () => {
  const { signup } = useSignup();
  const { patient } = useAppContext();

  const handleSubmit = (values: SignUpType) => {
    const { newValues } = useUserStrategy(values);
    signup(newValues);
  };

  return (
    <>
      <Formik
        validationSchema={
          patient === 'patient'
            ? validationSchemaPatient
            : validationSchemaMedecin
        }
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {(props) => {
          return <SignUpFormBase {...props} />;
        }}
      </Formik>
    </>
  );
};
