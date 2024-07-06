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
import { useContext } from 'react';
import { appContext } from '@clicMedic/components/app/app';

export const SignUp = () => {
  const { signup } = useSignup();
  const { patient } = useContext(appContext);

  const handleSubmit = (values: SignUpType) => {
    let newValues = {} as SignUpType;
    if (values.type === 'patient') {
      newValues = {
        type: values.type,
        accountDetails: {
          email: values.accountDetails.email,
          nom: values.accountDetails.nom,
          prenom: values.accountDetails.prenom,
          telephone: values.accountDetails.telephone,
          dateNaissance: values.accountDetails.dateNaissance,
          numeroAssuranceMaladie: values.accountDetails.dateNaissance,
          mdp: values.accountDetails.mdp,
        },
      };
    } else if (values.type === 'medecin') {
      newValues = {
        type: values.type,
        accountDetails: {
          email: values.accountDetails.email,
          nom: values.accountDetails.nom,
          prenom: values.accountDetails.prenom,
          telephone: values.accountDetails.telephone,
          mdp: values.accountDetails.mdp,
          lieuTravail: values.accountDetails.lieuTravail,
          NIMC: values.accountDetails.NIMC,
          numeroEmploye: values.accountDetails.numeroEmploye,
          telephoneBureau: values.accountDetails.telephoneBureau,
          specialisation: values.accountDetails.specialisation,
        },
      };
    }
    signup(newValues);
  };

  return (
    <>
      <Formik
        validationSchema={
          patient ? validationSchemaPatient : validationSchemaMedecin
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
