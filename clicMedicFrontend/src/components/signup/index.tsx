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
    let newvalues = {} as SignUpType;
    if (values.type === 'patient') {
      newvalues = {
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
      newvalues = {
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
    const execute = async () => {
      await signup(newvalues);
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
