import React, { useState } from 'react';
import AppLayout from '.';
import { Login } from '../login';
import { SignUp } from '../signup';

interface appContextProps {
  showSignUpForm: boolean;
  setShowSignUpForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const appContext = React.createContext<appContextProps | undefined>(
  undefined
);

export const AppUI = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const onClickShowSignUpForm = () => {
    setShowSignUpForm(true);
  };
  return (
    <appContext.Provider value={{ showSignUpForm, setShowSignUpForm }}>
      <AppLayout>
        {!showSignUpForm && <Login />}
        {showSignUpForm && <SignUp />}
        {!showSignUpForm && (
          <div>
            No account :{' '}
            <label
              className="AppUI-signUpLabel"
              onClick={onClickShowSignUpForm}
            >
              Sign up
            </label>
          </div>
        )}
      </AppLayout>
    </appContext.Provider>
  );
};
