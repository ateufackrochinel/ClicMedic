import { Formik } from 'formik';

import { useParams } from 'react-router-dom';
import { RendezVousPatientType } from '../../types';
import { useRendezVousPatientData } from '../../hooks/rendez-vous-patient.hooks';
import { RendezVousPatientFormBase } from './rendez-vous-patient-form-base';

export const RendezVousPatient = ({ medecinId }: { medecinId: string }) => {
  // const { patientId } = useParams();
  console.log(medecinId, 'medecinId');
  const initialValues: RendezVousPatientType = {
    debut: '',
    duree: 0,
    lieu: '',
    notes: '',
    medecinId: '',
    titre: '',
  };
  const { error, loading, rendezVousPatient } = useRendezVousPatientData();

  const handleSubmit = (values: RendezVousPatientType) => {
    values.medecinId = medecinId;
    values.debut = new Date(values.debut).toISOString();
    values.duree = Number(values.duree);
    rendezVousPatient(values);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(props) => {
          return <RendezVousPatientFormBase {...props} />;
        }}
      </Formik>
    </>
  );
};
