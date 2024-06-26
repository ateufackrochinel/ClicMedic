import './doctor-profile.css';
import { Medecin } from '../../../../api/types';

export const DoctorProfile = ({ doctor }: { doctor: Medecin }) => {
  return (
    <div className="DoctorProfile-profileContainer">
      <div>
        <h2>Profile</h2>
        <div>
          <label className="DoctorProfile-prefix"> {`Nom : `}</label>
          <label className="DoctorProfile-text">{`${doctor.user.nom}`}</label>
        </div>
        <div>
          <label className="DoctorProfile-prefix"> {`Prénom : `}</label>
          <label className="DoctorProfile-text">{`${doctor.user.prenom}`}</label>
        </div>
        <div>
          <label className="DoctorProfile-prefix"> {`Email : `}</label>
          <label className="DoctorProfile-text">{`${doctor.user.email}`}</label>
        </div>
        <div>
          <label className="DoctorProfile-prefix"> {`Date Ajout  : `}</label>
          <label className="DoctorProfile-text">{`${new Date(
            doctor.user.dateAjout
          )
            .toISOString()
            .substring(0, 19)}`}</label>
        </div>
        <div>
          <label className="DoctorProfile-prefix"> {`Téléphone : `}</label>
          <label className="DoctorProfile-text">{`${doctor.user.telephone}`}</label>
        </div>
        <div>
          <label className="DoctorProfile-prefix">{`Lieu de travail : `}</label>
          <label className="DoctorProfile-text">{`${doctor.lieuTravail}`}</label>
        </div>
        <div>
          <label className="DoctorProfile-prefix"> {`Spécialité : `}</label>
          <label className="DoctorProfile-text">{`${doctor.specialite.description}`}</label>
        </div>
        <div>
          <label className="DoctorProfile-prefix">
            {`Téléphone bureau : `}
          </label>
          <label className="DoctorProfile-text">{`${doctor.telephoneBureau}`}</label>
        </div>
      </div>
    </div>
  );
};
