import { useDoctorProfileData } from '../../hooks/patient-profile.hooks';

export const DoctorProfile = () => {
  const { error, loading, doctor } = useDoctorProfileData();
  console.log(doctor, 'pation');

  if (loading || Object.keys(doctor).length === 0) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong...</div>;
  }
  return (
    <div className="DoctorProfile-profileContainer">
      <div>
        Profile
        <div>{`Nom : ${doctor.user.nom}`}</div>
        <div>{`Prénom : ${doctor.user.prenom} `}</div>
        <div>{`Email : ${doctor.user.email}`}</div>
        <div>{`Date Ajout : ${new Date(
          doctor.user.dateAjout
        ).toLocaleString()} `}</div>
        <div>{`Téléphone : ${doctor.user.telephone}`}</div>
        <div>{`lieu de travail : ${doctor.lieuTravail} `}</div>
        <div>{`Spécialité : ${doctor.specialite} `}</div>
        <div>{`Téléphone bureau : ${doctor.telephoneBureau} `}</div>
      </div>
    </div>
  );
};
