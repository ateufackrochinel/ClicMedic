import './horaire-medecin.css';
import React, { useEffect } from 'react';
import { useHoraireMedecinData } from '../../hooks/horaire-medecin.hooks';
import { GetHoraireInputType } from '../../types';

export const HoraireMedecin = ({
  medecinId,
  endDate,
  startDate,
}: GetHoraireInputType) => {
  const {
    getHoraireMedecin,
    horaires,
    loading,
    error,
  } = useHoraireMedecinData();
  useEffect(() => {
    getHoraireMedecin({
      medecinId,
      endDate,
      startDate,
    });
  }, []);

  if (loading && Object.keys(horaires).length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {Array.isArray(horaires) &&
        horaires.length > 0 &&
        horaires.map(
          ({ id, lieu, titre, patient, duree, notes, tempsDebut, rapport }) => {
            return (
              <>
                <div key={id} className="HoraireMedecin-container">
                  <div>
                    <label className="HoraireMedecin-prefix"> {`Nom :`}</label>
                    <label className="HoraireMedecin-text">
                      {`${patient.user.prenom} ${patient.user.nom}`}
                    </label>
                  </div>
                  <div>
                    <label className="HoraireMedecin-prefix">{`Date de naissance :`}</label>
                    <label className="HoraireMedecin-text">
                      {`${patient.dateNaissance}`}
                    </label>
                  </div>
                  <div>
                    <label className="HoraireMedecin-prefix">
                      {`Numéro d'assurance maladie :`}
                    </label>
                    <label className="HoraireMedecin-text">
                      {`${patient.numeroAssuranceMaladie}`}
                    </label>
                  </div>
                  <div>
                    <label className="HoraireMedecin-prefix">{`titre :`}</label>
                    <label className="HoraireMedecin-text">{`${titre}`}</label>
                  </div>
                  <div>
                    <label className="HoraireMedecin-prefix">{`Lieu :`}</label>
                    <label className="HoraireMedecin-text">{`${lieu}`}</label>
                  </div>
                  <div>
                    <label className="HoraireMedecin-prefix">{`Duree :`}</label>
                    <label className="HoraireMedecin-text">{`${duree}min`}</label>
                  </div>
                  <div>
                    <label className="HoraireMedecin-prefix">{`Temps debut :`}</label>
                    <label className="HoraireMedecin-text">{`${tempsDebut}`}</label>
                  </div>
                  <div>
                    <label className="HoraireMedecin-prefix">{`Notes :`}</label>
                    <label className="HoraireMedecin-text">{`${notes}`}</label>
                  </div>
                  <div>
                    <label className="HoraireMedecin-prefix">{`Rapport :`}</label>
                    <label className="HoraireMedecin-text">{`${rapport.contenu}`}</label>
                  </div>
                </div>
              </>
            );
          }
        )}
    </>
  );
};
