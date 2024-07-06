import React, { useState } from 'react';
import AppLayout from '.';
import { Login } from '../../module/auth/components/login';
import { SignUp } from '../../module/auth/components/signup';

export interface appContextProps {
  showSignUpForm: boolean;
  toggle: (val: boolean) => void;
  patient: string;
  togglePatient: (val: string) => void;
}

export const appContext = React.createContext<appContextProps>({
  showSignUpForm: false,
  toggle: (val: boolean) => {},
  patient: '',
  togglePatient: (val: string) => {},
});

export const AppUI = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [patient, setPatient] = useState('');
  const toggle = (val: boolean) => setShowSignUpForm(val);
  const togglePatient = (val: string) => setPatient(val);
  const value = { toggle, showSignUpForm, patient, togglePatient };

  return (
    <appContext.Provider value={value}>
      <AppLayout>
        <div>
          {!showSignUpForm && <Login />}
          {showSignUpForm && <SignUp />}
        </div>
      </AppLayout>
    </appContext.Provider>
  );
};
