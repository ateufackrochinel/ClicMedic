import React, { PropsWithChildren, useContext, useState } from 'react';
export interface appContextProps {
  showSignUpForm: boolean;
  toggle: (val: boolean) => void;
  patient: string;
  togglePatient: (val: string) => void;
}

export const Context = React.createContext<appContextProps>({
  showSignUpForm: false,
  toggle: (val: boolean) => {},
  patient: '',
  togglePatient: (val: string) => {},
});

export const useAppContext = () => useContext(Context);

export const ContextController: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [patient, setPatient] = useState('');
  const toggle = (val: boolean) => setShowSignUpForm(val);
  const togglePatient = (val: string) => setPatient(val);
  const value = { toggle, showSignUpForm, patient, togglePatient };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
