import { useNavigate } from 'react-router-dom';
import { useDoctorData } from '../../hooks/doctor.hooks';
import './patient-card.css';
import { useEffect, useRef, useState } from 'react';
import { RendezVousMedecin } from '../rendez-vous-medecin';

export const PatientCard = () => {
  const navigate = useNavigate();
  const [patientId, setPatientId] = useState('');
  const { loading, error, fetchPatient, patients } = useDoctorData();
  const ref = useRef<HTMLDivElement | null>(null);

  console.log(patients, 'patients');
  useEffect(() => {
    fetchPatient();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  const onClikTakeAppointment = (id: string) => {
    if (ref.current) {
      ref.current.style.display = 'block';
    }
    setPatientId(id);
  };
  window.onclick = function (event) {
    if (ref.current !== null && event.target === ref.current) {
      ref.current.style.display = 'none';
    }
  };
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
      <div className="RendezVousMedecin-container" ref={ref}>
        <div className="RendezVousMedecin-content">
          <RendezVousMedecin patientId={patientId} />
        </div>
      </div>
    </>
  );
};
