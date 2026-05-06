import './rendez-vous-patient.css';

import { Form, FormikProps } from 'formik';
import { InputUI } from '@clicMedic/components/input';
export type RendezVousFormBaseProps = {
  titre: string;
  lieu: string;
  medecinId: string;
  debut: string;
  duree: number;
  notes: string;
};
export const RendezVousPatientFormBase = ({
  handleSubmit,
}: FormikProps<RendezVousFormBaseProps>) => {
  return (
    <>
      <h2>Prendre un rendez-vous</h2>
      <Form className="RendezVousFormBase-form" onSubmit={handleSubmit}>
        <InputUI labelname="Titre" placeholder="Titre de la consultation" type="text" name="titre" />
        <InputUI labelname="Lieu" placeholder="Lieu du rendez-vous" type="text" name="lieu" />
        <InputUI labelname="Date de début" placeholder="" type="datetime-local" name="debut" />
        <InputUI labelname="Durée (minutes)" placeholder="Ex: 30" type="number" name="duree" />
        <InputUI labelname="Notes" placeholder="Observations, instructions..." type="text" name="notes" />
        <button className="RendezVousFormBase-btn clic-btn" type="submit">
          Confirmer le rendez-vous
        </button>
      </Form>
    </>
  );
};
