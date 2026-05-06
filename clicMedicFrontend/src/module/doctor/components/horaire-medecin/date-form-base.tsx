import './horaire-medecin.css';
import { Form, FormikProps } from 'formik';
import { InputUI } from '@clicMedic/components/input';

export type DateFormBaseProps = {
  startDate: string;
  endDate: string;
  medecinId: string;
};
export const DateFormBase = ({
  handleSubmit,
}: FormikProps<DateFormBaseProps>) => {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div className="DateFormBase-form">
          <InputUI
            labelname="Date de début"
            placeholder=""
            type="date"
            name="startDate"
          />
          <InputUI
            labelname="Date de fin"
            placeholder=""
            type="date"
            name="endDate"
          />
          <button className="DateFormBase-btn clic-btn" type="submit">
            Rechercher
          </button>
        </div>
      </Form>
    </>
  );
};
