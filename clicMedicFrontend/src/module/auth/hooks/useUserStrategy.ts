import {
  ConcreteMedecin,
  ConcretePatient,
  UserStrategy,
} from '@clicMedic/model/user-strategy/strategy';
import { SignUpType } from '../types';

export const useUserStrategy = (values: SignUpType) => {
  let newValues: SignUpType = {} as SignUpType;
  switch (values.type) {
    case 'patient':
      const patientStrategy: UserStrategy = new UserStrategy(
        new ConcretePatient(),
        values
      );
      newValues = patientStrategy.executeStrategy();
      break;
    case 'medecin':
      const doctorStrategy: UserStrategy = new UserStrategy(
        new ConcreteMedecin(),
        values
      );
      newValues = doctorStrategy.executeStrategy();
      break;
    default:
      break;
  }

  return {
    newValues,
  };
};
