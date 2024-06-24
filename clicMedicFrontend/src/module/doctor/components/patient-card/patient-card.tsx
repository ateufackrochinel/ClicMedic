import { useDoctorData } from '../../hooks/doctor.hooks';
import './patient-card.css';
import { useEffect } from 'react';

export const PatientCard = () => {
  const { loading, error, fetchPatient, patients } = useDoctorData();

  console.log(patients, 'patients');
  useEffect(() => {
    fetchPatient();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  const onClikTakeAppointment = (id: string) => {};
  return (
    <>
      {Array.isArray(patients) &&
        patients.length > 0 &&
        patients.map(({ id, user, dateNaissance, numeroAssuranceMaladie }) => {
          return (
            <>
              <div key={id} className="PatientCard-container">
                <div>
                  <label className="PatientCard-prefix"> {`Nom :`}</label>
                  <label className="PatientCard-text">
                    {`${user.prenom} ${user.nom}`}
                  </label>
                </div>
                <div>
                  <label className="PatientCard-prefix">{`Date de naissance :`}</label>
                  <label className="PatientCard-text">
                    {`${dateNaissance}`}
                  </label>
                </div>
                <div>
                  <label className="PatientCard-prefix">
                    {`Numéro d'assurance maladie :`}
                  </label>
                  <label className="PatientCard-text">
                    {`${numeroAssuranceMaladie}`}
                  </label>
                </div>

                <div>
                  <button onClick={() => onClikTakeAppointment(id)}>
                    Prendre Rendez-vous
                  </button>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};
