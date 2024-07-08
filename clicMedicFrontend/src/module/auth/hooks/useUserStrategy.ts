import {
  GetMedecin,
  GetPatient,
  UserStrategy,
} from '@clicMedic/model/user-strategy/strategy';
import { SignUpType } from '../types';

export const useUserStrategy = (values: SignUpType) => {
  let newValues = {} as SignUpType;

  if (values.type === 'patient') {
    const patientStrategy: UserStrategy = new UserStrategy(
      new GetPatient(),
      values
    );
    newValues = patientStrategy.executeStrategy();
  } else if (values.type === 'medecin') {
    const medecinStrategy: UserStrategy = new UserStrategy(
      new GetMedecin(),
      values
    );
    newValues = medecinStrategy.executeStrategy();
  }

  return {
    newValues,
  };
};
