export type responseAuthType = {
  token: string;
};
export type LoginType = {
  identifiant: string;
  mdp: string;
  userType: string;
};

export type SignUpType = {
  type: string;
  accountDetails: AccountDetails;
};

export type AccountDetails = {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  mdp: string;
  numeroAssuranceMaladie?: string;
  dateNaissance?: string;
  specialisation?: string;
  numeroEmploye?: string;
  telephoneBureau?: string;
  lieuTravail?: string;
  NIMC?: string;
};

export type SpecialtiesType = {
  id: string;
  nom: string;
  description: string;
  needGreenlight: boolean;
};
