import './horaire-medecin.css';
import { Form, FormikProps } from 'formik';
import { InputUI } from '../../../../components/input';

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
          <div>
            <InputUI
              labelname="Start Date"
              placeholder="Start Date"
              type="date"
              name="startDate"
            />
          </div>
          <div>
            <InputUI
              labelname="End Date"
              placeholder="End Date"
              type="date"
              name="endDate"
            />
          </div>
          <div>
            <button className="DateFormBase-btn  clic-btn" type="submit">
              search
            </button>
          </div>
        </div>
      </Form>
    </>
  );
};
