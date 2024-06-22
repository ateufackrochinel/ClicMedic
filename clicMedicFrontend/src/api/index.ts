import { LoginType } from '../module/auth/types';
import { SpecialtiesType } from './types';
import { get, post } from './utils';

const getSpecialties = async (): Promise<{
  specialites: SpecialtiesType[];
}> => {
  return await get<{ specialites: SpecialtiesType[] }>(
    '/clicmedic/specialites'
  );
};

const login = async (
  body: LoginType
): Promise<{
  token: string;
}> => {
  return await post<{ token: string }>('/auth/login', { body });
};

export const apiClient = {
  getSpecialties,
  login,
};
