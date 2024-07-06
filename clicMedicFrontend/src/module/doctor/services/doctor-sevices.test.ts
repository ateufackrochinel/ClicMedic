import { FetchPatientsType } from '../types';
import {
  afterEach,
  beforeAll,
  describe,
  expect,
  expectTypeOf,
  test,
  vi,
} from 'vitest';
import { doctorsServices } from './services';
import { authService } from '@clicMedic/module/auth/services';

const BEFORE_ALL_TIMEOUT = 30000; // 30 sec
global.fetch = vi.fn();
const patientDataTest = {
  patients: [
    {
      id: '45588aghjcjahhh',
      numeroAssuranceMaladie: 'GGHHJvoisjj12222',
      dateNaissance: '2010-08-12',
      user: {
        id: 'YYYU5566666',
        nom: 'nomtest',
        prenom: 'prenomtest',
        email: 'email@test.com',
        telephone: '4385807889',
        dateAjout: '2024-03-12',
      },
    },
    {
      dateNaissance: '2024-06-04',
      id: '4e786bdc-b365-4c9b-8d38-e629d99ea378',
      numeroAssuranceMaladie: 'AHHDJ1141455557899',
      user: {
        id: '2e11e353-9403-4262-9b36-b4ddd8bd721d',
        dateAjout: '2024-06-20T14:59:41.4042',
        email: 'guy@gmail.com',
        nom: 'Guy',
        prenom: 'Guyzo',
        telephone: '4385805710',
      },
    },
  ],
};
describe('Doctor services ', () => {
  let patient: FetchPatientsType = {} as FetchPatientsType;

  beforeAll(async () => {
    // const { token } = await authService.login({
    //   userType: 'medecin',
    //   mdp: 'bomotdepasse1',
    //   identifiant: 'EMP123723233334578',
    // });
    // if (token) {
    //   patient = await doctorsServices.fetchPatient(token);
    // }
    vi.mocked(doctorsServices.fetchPatient).mockResolvedValue(patientDataTest);
    expect(await doctorsServices.fetchPatient).toEqual(patientDataTest);
  }, BEFORE_ALL_TIMEOUT);

  afterEach(() => {});

  test('should have patient object match the model', () => {
    expect(patient.patients[0]).toEqual(patientDataTest.patients[1]);
  });
  test('should have id type string ', () => {
    expect(patient.patients[0].id).toBeTypeOf('string');
  });
});
