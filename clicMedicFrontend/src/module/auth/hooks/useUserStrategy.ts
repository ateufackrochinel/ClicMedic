import {
  ConcreteUser,
  UserStrategy,
} from '@clicMedic/model/user-strategy/strategy';
import { SignUpType } from '../types';

export const useUserStrategy = (values: SignUpType) => {
  const userstrategy: UserStrategy = new UserStrategy(
    new ConcreteUser(),
    values
  );
  const newValues: SignUpType = userstrategy.executeStrategy();

  return {
    newValues,
  };
};
