import { appContext } from './../../../components/app/app';
import { useContext, useState } from 'react';
import { authService } from '../services';
import { SignUpType, responseAuthType } from '../types';

export const useSignup = () => {
  const context = useContext(appContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const signup = async (body: SignUpType) => {
    try {
      setLoading(true);
      const data: responseAuthType = await authService.signUp(body);
      localStorage.setItem('accessToken', data.token);

      context?.setShowSignUpForm(false);
    } catch (e) {
      setError(e as Error);
      context?.setShowSignUpForm(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    signup,
  };
};
