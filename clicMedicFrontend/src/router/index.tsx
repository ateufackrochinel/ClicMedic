import { Routes, Route, useNavigate } from 'react-router-dom';
import { DoctorPage } from '../pages/doctor-page';
import { PatientPage } from '../pages/patient-page';
import { NoPage } from '../pages/no-page';
import { AppUI } from '../components/app/app';
import { RendezVousMedecin } from '../module/doctor/components/rendez-vous-medecin';

export const AppRouter = () => {
  const navigate = useNavigate();
  const onClickRedirect = () => {
    navigate('/');
  };
  return (
    <>
      <div onClick={onClickRedirect} className="App-header">
        <h2>Clic Medic</h2>
      </div>
      <Routes>
        <Route path="/" element={<AppUI />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/medecin" element={<DoctorPage />} />
        {/* <Route
          path="/rendez-vous/patient/:patientId"
          element={<RendezVousMedecin />}
        /> */}

        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
};
