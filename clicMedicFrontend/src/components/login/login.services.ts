import { LoginType } from './login-form-base';

export const login = async (values: LoginType) => {
  const response = await fetch(`http://localhost:8080/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });
  return response.json();
};
