import { Formik } from 'formik';
import {
  RendezVousFormBaseProps,
  RendezVousMedecinFormBase,
} from './rendez-vous-form-base';
import { useRendezVousMedecinData } from '../../hooks/rendez-vous-medecin.hooks';
import { formatDateForAPI } from '@clicMedic/api/dateUtils';

export const RendezVousMedecin = ({ patientId }: { patientId: string }) => {
  const initialValues: RendezVousFormBaseProps = {
    debut: '',
    duree: 0,
    lieu: '',
    notes: '',
    patientId: '',
    titre: '',
  };
  const { rendezVousMedecin } = useRendezVousMedecinData();

  const handleSubmit = (values: RendezVousFormBaseProps) => {
    values.patientId = patientId;
    values.debut = formatDateForAPI(values.debut);
    values.duree = Number(values.duree);
    rendezVousMedecin(values);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(props) => {
          return <RendezVousMedecinFormBase {...props} />;
        }}
      </Formik>
    </>
  );
};
