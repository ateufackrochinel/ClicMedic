import './doctor.css';
import { DoctorProfile } from './components/doctor-profile/doctor-profile';
import { PatientCard } from './components/patient-card/patient-card';
import { useDoctorProfileData } from './hooks/doctor-profile.hooks';
import { HoraireMedecin } from './components/horaire-medecin/horaire-medecin';

const appointmentDates = [
  '2023-04-07',
  '2024-06-08',
  '2024-12-06',
  '2024-10-11',
];

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
        <h2>Liste rendez vous</h2>
        <div className="Doctor-appointmentContainer">
          <HoraireMedecin
            medecinId={doctor.id}
            endDate="2024-06-30T00:00:00"
            startDate="2024-06-24T00:00:00"
          />
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
