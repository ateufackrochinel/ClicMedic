import './medecin-card.css';

import { useEffect } from 'react';
import { usePatientData } from '../../hooks/patient.hooks';

export const MedecinCard = () => {
  const { fetchMedecin, medecins, loading } = usePatientData();

  console.log(medecins, 'medecins');
  useEffect(() => {
    fetchMedecin();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  const onClikTakeAppointment = (id: string) => {};
  return (
    <>
      {Array.isArray(medecins) &&
        medecins.length > 0 &&
        medecins.map(
          ({ id, lieuTravail, specialite, telephoneBureau, user }) => {
            return (
              <>
                <div key={id} className="MedecinCard-container">
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
                  {/* <div>
                    <label className="MedecinCard-prefix">
                      {`Numéro Employé :`}
                    </label>
                    <label className="MedecinCard-text">
                      {`${numeroEmploye}`}
                    </label>
                  </div>
                  <div>
                    <label className="MedecinCard-prefix"> {`NIMC :`}</label>
                    <label className="MedecinCard-text"> {`${nimc}`}</label>
                  </div> */}
                  <div>
                    <label className="MedecinCard-prefix">
                      {`Lieu Travail :`}
                    </label>
                    <label className="MedecinCard-text">
                      {`${lieuTravail}`}
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
          }
        )}
    </>
  );
};
