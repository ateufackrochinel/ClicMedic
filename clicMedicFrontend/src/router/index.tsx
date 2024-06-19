import { Routes, Route } from 'react-router-dom';
import { DoctorPage } from '../pages/doctor-page';
import { PatientPage } from '../pages/patient-page';
import { NoPage } from '../pages/no-page';
import { AppUI } from '../components/app/app';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppUI />} />
      <Route path="/patient" element={<PatientPage />} />
      <Route path="/doctor" element={<DoctorPage />} />

      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};
