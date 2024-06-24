import React, { useEffect } from 'react';
import { usePatientProfileData } from '../../hooks/patient-profile.hooks';

export const PatientProfile = () => {
  const { error, loading, patient } = usePatientProfileData();
  console.log(patient, 'pation');

  if (loading || Object.keys(patient).length === 0) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong...</div>;
  }
  return (
    <div className="PatientProfile-profileContainer">
      <div>
        Profile
        <div>{`Nom : ${patient.user.nom}`}</div>
        <div>{`Prénom : ${patient.user.prenom} `}</div>
        <div>{`Email : ${patient.user.email}`}</div>
        <div>{`Date Ajout : ${patient.user.dateAjout} `}</div>
        <div>{`Téléphone : ${patient.user.telephone}`}</div>
        <div>{`Date naissance : ${patient.dateNaissance} `}</div>
      </div>
    </div>
  );
};
