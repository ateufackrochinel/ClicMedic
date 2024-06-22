import { post } from '../../api/utils';
import { LoginType, SignUpType, responseAuthType } from './types';

const login = async (body: LoginType): Promise<responseAuthType> => {
  return await post<{ token: string }>('/auth/login', { body });
};

const signUp = async (body: SignUpType): Promise<responseAuthType> => {
  return await post<responseAuthType>('/auth/create-account', { body });
};

export const authService = {
  login,
  signUp,
};
