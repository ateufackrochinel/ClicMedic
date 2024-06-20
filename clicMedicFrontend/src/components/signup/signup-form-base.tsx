import './signup.css';
import { Field, Form, FormikProps } from 'formik';
import { InputUI } from '../input';
import { SignUpType } from './signup.definitions';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { appContext } from '../app/app';
import { getDoctorSpecialties } from './signup.services';

export const SignUpFormBase = ({
  handleSubmit,
  setFieldValue,
}: FormikProps<SignUpType>) => {
  const context = useContext(appContext);

  const [doctorSpecialties, setDoctorSpecialties] = useState();
  const [userType, setUserType] = useState('patient');
  useEffect(() => {
    const execute = async () => {
      const result = await getDoctorSpecialties();
      setDoctorSpecialties(result);
    };
    execute();
  }, []);

  // useEffect(() => {
  //   if (values.type === 'patient') {
  //     setIsPatient(true);
  //   } else {
  //     setIsPatient(false);
  //   }
  // }, [values.type]);

  console.log(doctorSpecialties, 'doctorSpecialties');
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
          className="Login-checkBoxContainer"
        >
          <div>
            <input
              onChange={() => {
                setUserType('patient'), setFieldValue('userType', 'patient');
              }}
              type="radio"
              name="userType"
              value={userType}
            />
            <label>Patient</label>
          </div>
          <div>
            <input
              onChange={() => {
                setUserType('medecin');
                setFieldValue('userType', 'medecin');
              }}
              type="radio"
              name="userType"
              value={userType}
            />
            <label>Medecin</label>
          </div>
        </div>
        {userType === 'patient' && (
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

        {userType === 'medecin' && (
          <div className="orthersMedecinProps">
            <InputUI
              labelname="Spécialisation"
              placeholder="Spécialisation"
              type="text"
              name="accountDetails.specialisation"
            />
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
