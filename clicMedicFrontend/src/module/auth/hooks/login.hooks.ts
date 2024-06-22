import { useState } from 'react';
import { authService } from '../services';
import { LoginType, responseAuthType } from '../types';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const login = async (body: LoginType) => {
    let url: string = '';
    try {
      setLoading(true);
      const data: responseAuthType = await authService.login(body);
      localStorage.setItem('accessToken', data.token);
      if (body.userType === 'patient') {
        url = '/patient';
      } else if (body.userType === 'medecin') {
        url = '/medecin';
      }
      navigate(url);
    } catch (e) {
      setError(e as Error);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    login,
  };
};
