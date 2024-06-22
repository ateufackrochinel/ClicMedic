import './signup.css';
import { Field, Form, FormikProps } from 'formik';

import { useContext, useState } from 'react';

import { SpecialtiesOptions } from './specialties-options';
import { appContext } from '../../../../components/app/app';
import { InputUI } from '../../../../components/input';
import { SignUpType } from '../../types';

export const SignUpFormBase = ({
  handleSubmit,
  setFieldValue,
  values,
}: FormikProps<SignUpType>) => {
  const context = useContext(appContext);

  const [userType, setUserType] = useState('patient');

  const handleGoBack = () => {
    context?.setShowSignUpForm(false);
  };
  return (
    <div className="RegisterFormBase-container">
      <h2>Inscription</h2>
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
          labelname="Mot de passe"
          placeholder="Mot de passe"
          type="text"
          name="accountDetails.mdp"
        />
        <div
          role="group"
          aria-labelledby="my-radio-group"
          className="RegisterFormBase-radioContainer"
        >
          <div>
            <input
              onChange={() => {
                setUserType('patient'), setFieldValue('type', 'patient');
              }}
              type="radio"
              name="type"
              value={values.type}
            />
            <label>Patient</label>
          </div>
          <div>
            <input
              onChange={() => {
                setFieldValue('type', 'medecin');
              }}
              type="radio"
              name="type"
              value={values.type}
            />
            <label>Medecin</label>
          </div>
        </div>
        {values.type === 'patient' && (
          <div className="ontherPatientProps">
            <InputUI
              labelname="Numero d'assurance maladie"
              placeholder="Numero d'assurance maladie"
              type="text"
              name="accountDetails.numeroAssuranceMaladie"
            />
            <InputUI
              type="date"
              name="accountDetails.dateNaissance"
              labelname="Date de naissance"
            />
          </div>
        )}

        {values.type === 'medecin' && (
          <div className="orthersMedecinProps">
            <Field
              as="select"
              name="accountDetails.specialisation"
              className="selectSpecialtyField"
            >
              <option value={''}>{'Speicilites du medecin'}</option>
              <SpecialtiesOptions />
            </Field>
            <InputUI
              type="text"
              name="accountDetails.numeroEmploye"
              placeholder="Numéro employé"
              labelname="Numéro employé"
            />
            <InputUI
              labelname="Téléphone de bureau"
              placeholder="Téléphone de bureau"
              type="text"
              name="accountDetails.telephoneBureau"
            />
            <InputUI
              type="text"
              name="accountDetails.lieuTravail"
              labelname="Lieu de travail"
              placeholder="Lieu de travail"
            />
            <InputUI
              type="text"
              name="accountDetails.NIMC"
              labelname="NIMC"
              placeholder="NIMC"
            />
          </div>
        )}

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
