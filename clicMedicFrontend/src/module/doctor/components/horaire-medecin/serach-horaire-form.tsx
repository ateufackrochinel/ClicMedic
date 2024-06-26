import { Formik } from 'formik';
import { DateFormBase, DateFormBaseProps } from './date-form-base';
import { useHoraireMedecinData } from '../../hooks/horaire-medecin.hooks';
import { HoraireMedecin } from './horaire-medecin';

export const SearchHoraireForm = ({ medecinId }: { medecinId: string }) => {
  const initialValues: DateFormBaseProps = {
    startDate: '',
    endDate: '',
    medecinId: '',
  };
  const {
    getHoraireMedecin,
    horaires,
    loading,
    error,
  } = useHoraireMedecinData();

  const handleSubmit = (values: DateFormBaseProps) => {
    values.medecinId = medecinId;
    values.startDate = new Date(values.startDate)
      .toISOString()
      .substring(0, 19);
    values.endDate = new Date(values.endDate).toISOString().substring(0, 19);
    getHoraireMedecin(values);
  };
  return (
    <div className="SearchHoraireForm-container">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(props) => {
          return <DateFormBase {...props} />;
        }}
      </Formik>
      {loading && <div>Loading...</div>}
      {horaires.length === 0 && <div>Pas d'horaire pour cette periode</div>}
      {horaires.length > 0 && <HoraireMedecin horaires={horaires} />}
    </div>
  );
};
