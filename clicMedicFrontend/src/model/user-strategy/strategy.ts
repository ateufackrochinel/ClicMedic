import { SignUpType } from '@clicMedic/module/auth/types';

export interface STrategy {
  getUser: (values: SignUpType) => SignUpType;
}

export class GetPatient implements STrategy {
  public getUser(values: SignUpType) {
    const patient = {
      type: values.type,
      accountDetails: {
        email: values.accountDetails.email,
        nom: values.accountDetails.nom,
        prenom: values.accountDetails.prenom,
        telephone: values.accountDetails.telephone,
        dateNaissance: values.accountDetails.dateNaissance,
        numeroAssuranceMaladie: values.accountDetails.dateNaissance,
        mdp: values.accountDetails.mdp,
      },
    };
    return patient;
  }
}

export class GetMedecin implements STrategy {
  public getUser(values: SignUpType) {
    const medecin = {
      type: values.type,
      accountDetails: {
        email: values.accountDetails.email,
        nom: values.accountDetails.nom,
        prenom: values.accountDetails.prenom,
        telephone: values.accountDetails.telephone,
        mdp: values.accountDetails.mdp,
        lieuTravail: values.accountDetails.lieuTravail,
        NIMC: values.accountDetails.NIMC,
        numeroEmploye: values.accountDetails.numeroEmploye,
        telephoneBureau: values.accountDetails.telephoneBureau,
        specialisation: values.accountDetails.specialisation,
      },
    };
    return medecin;
  }
}

export class UserStrategy {
  private strategy: STrategy = {} as STrategy;
  private signUpType: SignUpType = {} as SignUpType;
  constructor(_strategy: STrategy, _signUpType: SignUpType) {
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
