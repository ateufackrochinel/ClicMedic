import './signup.css';
import { Form, FormikProps } from 'formik';
import { InputUI } from '../input';
import { SignUpType } from './signup.definitions';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { appContext } from '../app/app';

export const SignUpFormBase = ({ handleSubmit }: FormikProps<SignUpType>) => {
  const context = useContext(appContext);
  const handleGoBack = () => {
    context?.setShowSignUpForm(false);
  };
  return (
    <div className="RegisterFormBase-container">
      <h2>Inscription Patient</h2>
      <Form className="RegisterFormBase-form" onSubmit={handleSubmit}>
        <InputUI
          labelname="Nom"
          placeholder="Nom"
          type="text"
          name="accountDetails.nom"
        />
        <InputUI
          labelname="Prénom"
          placeholder="Prénom"
          type="text"
          name="accountDetails.prenom"
        />
        <InputUI
          labelname="Email"
          placeholder="Email"
          type="email"
          name="accountDetails.email"
        />
        <InputUI
          labelname="Numéro de téléphone"
          placeholder="Numéro de téléphone"
          type="tel"
          name="accountDetails.telephone"
        />
        <InputUI
          labelname="Numero d'assurance maladie"
          placeholder="Numero d'assurance maladie"
          type="text"
          name="accountDetails.numeroAssuranceMaladie"
        />
        <InputUI
          labelname="Mot de passe"
          placeholder="Mot de passe"
          type="text"
          name="accountDetails.mdp"
        />
        <InputUI
          type="date"
          name="accountDetails.dateNaissance"
          labelname="Date de naissance"
        />
        <button className="RegisterFormBase-btn" type="submit">
          Submit
        </button>
        <button type="button" onClick={handleGoBack}>
          Go Back
        </button>
      </Form>
    </div>
  );
};
