import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DoctorPage } from '../pages/doctor-page';
import { PatientPage } from '../pages/patient-page';
import { NoPage } from '../pages/no-page';
import { AppUI } from '../components/app/app';
import App from '../App';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/patient" element={<PatientPage />} />
      <Route path="/doctor" element={<DoctorPage />} />
      {/* <Route path="contact" element={<Contact />} /> */}
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};
