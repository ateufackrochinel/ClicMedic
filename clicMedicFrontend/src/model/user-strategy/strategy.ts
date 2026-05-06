import { SignUpType } from '@clicMedic/module/auth/types';

export interface Strategy {
  getUser: (values: SignUpType) => SignUpType;
}

export class ConcreteUser implements Strategy {
  public getUser(values: SignUpType) {
    const {
      email,
      mdp,
      nom,
      prenom,
      telephone,
      NIMC,
      dateNaissance,
      lieuTravail,
      numeroAssuranceMaladie,
      numeroEmploye,
      specialisation,
      telephoneBureau,
    } = values.accountDetails;
    let user: SignUpType = {
      type: values.type,
      accountDetails: {
        email,
        nom,
        prenom,
        telephone,
        mdp,
      },
    };

    if (values.type === 'patient') {
      user = {
        ...user,
        accountDetails: {
          ...user.accountDetails,
          dateNaissance,
          numeroAssuranceMaladie,
        },
      };
    } else if (values.type === 'medecin') {
      user = {
        ...user,
        accountDetails: {
          ...user.accountDetails,
          lieuTravail,
          NIMC,
          telephoneBureau,
          specialisation,
          numeroEmploye,
        },
      };
    }

    return user;
  }
}
export class ConcretePatient implements Strategy {
  public getUser(values: SignUpType) {
    const {
      email,
      mdp,
      nom,
      prenom,
      telephone,
      dateNaissance,
      numeroAssuranceMaladie,
    } = values.accountDetails;
    const patient: SignUpType = {
      type: values.type,
      accountDetails: {
        email,
        nom,
        prenom,
        telephone,
        mdp,
        dateNaissance,
        numeroAssuranceMaladie,
      },
    };

    return patient;
  }
}
export class ConcreteMedecin implements Strategy {
  public getUser(values: SignUpType) {
    const {
      email,
      mdp,
      nom,
      prenom,
      telephone,
      NIMC,
      lieuTravail,
      numeroEmploye,
      specialisation,
      telephoneBureau,
    } = values.accountDetails;
    const medecin: SignUpType = {
      type: values.type,
      accountDetails: {
        email,
        nom,
        prenom,
        telephone,
        mdp,
        lieuTravail,
        numeroEmploye,
        specialisation,
        telephoneBureau,
        NIMC,
      },
    };
    return medecin;
  }
}

export class UserStrategy {
  private strategy: Strategy = {} as Strategy;
  private signUpType: SignUpType = {} as SignUpType;
  constructor(_strategy: Strategy, _signUpType: SignUpType) {
    this.strategy = _strategy;
    this.signUpType = _signUpType;
  }
  get getStrategy() {
    return this.strategy;
  }
  get getSignUpType() {
    return this.signUpType;
  }

  public executeStrategy() {
    return this.strategy.getUser(this.signUpType);
  }
}
