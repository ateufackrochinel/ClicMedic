import './patient-profile.css';
import { usePatientProfileData } from '../../hooks/patient-profile.hooks';

export const PatientProfile = () => {
  const { error, loading, patient } = usePatientProfileData();

  if (loading || Object.keys(patient).length === 0) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong...</div>;
  }
  return (
    <div className="PatientProfile-profileContainer">
      <div>
        <h2>Profile</h2>
        <div>
          <label className="PatientProfile-prefix"> {`Nom : `}</label>
          <label className="PatientProfile-text">{`${patient.user.nom}`}</label>
        </div>
        <div>
          <label className="PatientProfile-prefix"> {`Prénom : `}</label>
          <label className="PatientProfile-text">
            {`${patient.user.prenom}`}
          </label>
        </div>
        <div>
          <label className="PatientProfile-prefix"> {`Email : `}</label>
          <label className="PatientProfile-text">
            {`${patient.user.email}`}
          </label>
        </div>
        <div>
          <label className="PatientProfile-prefix"> {`Date Ajout : `}</label>
          <label className="PatientProfile-text">
            {`${new Date(patient.user.dateAjout).toUTCString()}`}
          </label>
        </div>
        <div>
          <label className="PatientProfile-prefix"> {`Téléphone : `}</label>
          <label className="PatientProfile-text">
            {`${patient.user.telephone}`}
          </label>
        </div>
        <div>
          <label className="PatientProfile-prefix">
            {' '}
            {`Date naissance : `}
          </label>
          <label className="PatientProfile-text">
            {`${patient.dateNaissance}`}
          </label>
        </div>
      </div>
    </div>
  );
};
