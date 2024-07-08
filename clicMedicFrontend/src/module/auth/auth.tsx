import { useAppContext } from '@clicMedic/components/app/contextController';
import { Login } from './components/login';
import { SignUp } from './components/signup';

export const Auth = () => {
  const { showSignUpForm } = useAppContext();
  return (
    <div>
      {!showSignUpForm && <Login />}
      {showSignUpForm && <SignUp />}
    </div>
  );
};
