import React from 'react';
import './patient.css';
const patients = {
  firstName: 'Guy',
  lastName: 'Tchoupo',
};
const appointmentDates = [
  '2023-04-07',
  '2024-06-08',
  '2024-12-06',
  '2024-10-11',
];
const specialDoctor = [
  { id: 1, name: 'Mack bolan', speciality: 'Dentist' },
  { id: 2, name: 'Mack bolan', speciality: 'Dentist' },
  { id: 3, name: 'Mack bolan', speciality: 'Dentist' },
  { id: 4, name: 'Mack bolan', speciality: 'Dentist' },
  { id: 5, name: 'Mack bolan', speciality: 'Dentist' },
];

const arrayString = [
  'Patient wan doctor ',
  'Doctor give the appointment',
  'Admin Create the doctor credential',
];

const Patient = () => {
  return (
    <div className="Patient-container">
      {/* <h1>Patient</h1> */}
      <div className="Patient-profileContainer">
        Profile
        <div>{`Firstname : ${patients.firstName}`}</div>
        <div>{`Lastname : ${patients.lastName} `}</div>
      </div>
      <div className="Patient-body">
        <h4>liste rendez vous</h4>
        <div className="Patient-appointmentContainer">
          {appointmentDates.map((item) => {
            return <div className="Patient-appointment">{item}</div>;
          })}
        </div>
        <div className="Patient-doctorsContainer">
          <h4>liste des Specialistes</h4>
          <div>
            {specialDoctor.map(({ id, name, speciality }) => {
              return (
                <div key={id}>
                  {' '}
                  {`Name: ${name} speciality : ${speciality}`}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
