const initialStates = {};

export type User = {
  nom: string;
  prenom: string;
  gender: string;
  email: string;
  telephone: string;
};
export type AccountDetails = {
  nom: string;
  prenom: string;
  gender: string;
  email: string;
  telephone: string;
  numeroAssuranceMaladie: string;
  dateNaissance: string;
};
export type SignUpType = {
  type: string;
  accountDetails: AccountDetails;
};
