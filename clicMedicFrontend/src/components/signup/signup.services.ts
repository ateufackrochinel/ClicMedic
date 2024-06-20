import { SignUpType } from './signup.definitions';

export const signup = async (values: SignUpType) => {
  const response = await fetch(`http://localhost:8080/auth/create-account`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  return response.json();
};

export const getDoctorSpecialties = async () => {
  const response = await fetch(`http://localhost:8080/clicmedic/specialites`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};
