import './medecin-card.css';

import { useEffect, useRef, useState } from 'react';
import { usePatientData } from '../../hooks/patient.hooks';
import { RendezVousPatient } from '../rendez-vous-patient';

export const MedecinCard = () => {
  const [medecinId, setMedecinId] = useState('');
  const { fetchMedecin, medecins, loading } = usePatientData();
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    fetchMedecin();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  const onClikTakeAppointment = (id: string) => {
    if (ref.current) {
      ref.current.style.display = 'block';
    }
    setMedecinId(id);
  };

  window.onclick = function (event) {
    if (ref.current !== null && event.target === ref.current) {
      ref.current.style.display = 'none';
    }
  };
  return (
    <div className="MedecinCard-container">
      {Array.isArray(medecins) &&
        medecins.length > 0 &&
        medecins.map(
          ({ id, lieuTravail, specialite, telephoneBureau, user }) => {
            return (
              <>
                <div key={id} className="MedecinCard-content">
                  <div>
                    <label className="MedecinCard-prefix"> {`Nom :`}</label>
                    <label className="MedecinCard-text">
                      {`${user.prenom} ${user.nom}`}
                    </label>
                  </div>
                  <div>
                    <label className="MedecinCard-prefix">
                      {`Spécialité :`}
                    </label>
                    <label className="MedecinCard-text">
                      {`${specialite.description}`}
                    </label>
                  </div>
                  <div>
                    <label className="MedecinCard-prefix">
                      {`Téléphone Bureau :`}
                    </label>
                    <label className="MedecinCard-text">
                      {`${telephoneBureau}`}
                    </label>
                  </div>
                  <div>
                    <label className="MedecinCard-prefix">
                      {`Lieu Travail :`}
                    </label>
                    <label className="MedecinCard-text">
                      {`${lieuTravail}`}
                    </label>
                  </div>
                  <div>
                    <button
                      className="clic-btn btn-pos"
                      onClick={() => onClikTakeAppointment(id)}
                    >
                      Prendre Rendez-vous
                    </button>
                  </div>
                </div>
              </>
            );
          }
        )}
      <div className="RendezVousPatient-container" ref={ref}>
        <div className="RendezVousPatient-content">
          <RendezVousPatient medecinId={medecinId} />
        </div>
      </div>
    </div>
  );
};
