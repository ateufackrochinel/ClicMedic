import './doctor.css';
import { DoctorProfile } from './components/doctor-profile/doctor-profile';
import { PatientCard } from './components/patient-card/patient-card';

const appointmentDates = [
  '2023-04-07',
  '2024-06-08',
  '2024-12-06',
  '2024-10-11',
];

const Doctor = () => {
  return (
    <div className="Doctor-container">
      <div className="Doctor-sidebar">
        <DoctorProfile />
      </div>
      <div className="Doctor-body">
        <h4>liste rendez vous</h4>
        <div className="Doctor-appointmentContainer">
          {appointmentDates.map((item) => {
            return (
              <div key={item} className="Doctor-appointment">
                {item}
              </div>
            );
          })}
        </div>
        <div className="Doctor-doctorsContainer">
          <h4>liste des patients</h4>
          <div className="Doctor-medecinContainer">
            <PatientCard />;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
