import './doctor.css';
import { DoctorProfile } from '@clicMedic/module/doctor/components/doctor-profile/doctor-profile';
import { PatientCard } from '@clicMedic/module/doctor/components/patient-card/patient-card';
import { useDoctorProfileData } from '@clicMedic/module/doctor/hooks/doctor-profile.hooks';
import { SearchHoraireForm } from '@clicMedic/module/doctor/components/horaire-medecin/serach-horaire-form';

const Doctor = () => {
  const { error, loading, doctor } = useDoctorProfileData();
  if (loading || Object.keys(doctor).length === 0) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong...</div>;
  }
  return (
    <div className="Doctor-container">
      <div className="Doctor-sidebar">
        <DoctorProfile doctor={doctor} />
      </div>
      <div className="Doctor-body">
        <h2>Horaire Medecin</h2>
        <div className="Doctor-appointmentContainer">
          <SearchHoraireForm medecinId={doctor.id} />
        </div>
        <div className="Doctor-doctorsContainer">
          <h2>Liste des patients</h2>
          <div className="Doctor-medecinContainer">
            <PatientCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
