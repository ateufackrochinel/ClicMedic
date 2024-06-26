import { Formik } from 'formik';
import {
  RendezVousFormBaseProps,
  RendezVousMedecinFormBase,
} from './rendez-vous-form-base';
import { useRendezVousMedecinData } from '../../hooks/rendez-vous-medecin.hooks';

export const RendezVousMedecin = ({ patientId }: { patientId: string }) => {
  const initialValues: RendezVousFormBaseProps = {
    debut: '',
    duree: 0,
    lieu: '',
    notes: '',
    patientId: '',
    titre: '',
  };
  const { error, loading, rendezVousMedecin } = useRendezVousMedecinData();

  const handleSubmit = (values: RendezVousFormBaseProps) => {
    values.patientId = patientId;
    values.debut = new Date(values.debut).toISOString().substring(0, 19);
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
