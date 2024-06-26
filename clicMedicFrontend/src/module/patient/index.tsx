import './patient.css';
import { MedecinCard } from './components/medecin-card';
import { PatientProfile } from './components/patient-profile/patient-profile';

const appointmentDates = [
  '2023-04-07',
  '2024-06-08',
  '2024-12-06',
  '2024-10-11',
];

const Patient = () => {
  return (
    <div className="Patient-container">
      <div className="Patient-sidebar">
        <PatientProfile />
      </div>
      <div className="Patient-body">
        <h4>liste rendez vous</h4>
        <div className="Patient-appointmentContainer">
          {appointmentDates.map((item) => {
            return (
              <div key={item} className="Patient-appointment">
                {item}
              </div>
            );
          })}
        </div>
        <div className="Patient-doctorsContainer">
          <h4>liste des Specialistes</h4>
          <div className="Patient-medecinContainer">
            <MedecinCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
