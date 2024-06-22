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

export type Patient = {
  id: string;
  numeroAssuranceMaladie: string;
  dateNaissance: string;
  user: User;
};
export type Medecin = {
  id: string;
  specialite: SpecialtiesType;
  user: User;
  numeroEmploye: string;
  telephoneBureau: string;
  lieuTravail: string;
  nimc: string;
};

export type User = {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  dateAjout: string;
};
export type RapportType = {
  id: string;
  dateModification: string;
  contenu: string;
};
export type Horairetype = {
  id: string;
  titre: string;
  lieu: string;
  patient: Patient;
  medecin: Medecin;
  tempsDebut: string;
  duree: number;
  notes: string;
  rapport: RapportType;
};
