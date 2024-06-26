import './rendez-vous-medecin.css';

import { Form, FormikProps } from 'formik';
import { InputUI } from '../../../../components/input';
import { useRef } from 'react';
export type RendezVousFormBaseProps = {
  titre: string;
  lieu: string;
  patientId: string;
  debut: string;
  duree: number;
  notes: string;
};
export const RendezVousMedecinFormBase = ({
  handleSubmit,
}: FormikProps<RendezVousFormBaseProps>) => {
  return (
    <>
      <h2>Rendez vous </h2>
      <Form className="RendezVousFormBase-form" onSubmit={handleSubmit}>
        <InputUI placeholder="Titre" type="text" name="titre" />
        <InputUI placeholder="Lieu" type="text" name="lieu" />
        <InputUI placeholder="Debut" type="date" name="debut" />
        <InputUI placeholder="Duree" type="text" name="duree" />
        <InputUI placeholder="Notes" type="text" name="notes" />
        <div>
          <button className="RendezVousFormBase-btn  clic-btn" type="submit">
            submit
          </button>
        </div>
      </Form>
    </>
  );
};
