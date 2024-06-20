package com.mgl802.clicmedic.Services;

import com.mgl802.clicmedic.Controlleur.jsontypes.AccountDetails.AccountDetails;
import com.mgl802.clicmedic.Controlleur.jsontypes.AccountDetails.PatientDetails;
import com.mgl802.clicmedic.Modele.Patient;
import com.mgl802.clicmedic.Modele.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CreatePatient extends CreateUser {

    //private AuthenticationService authService;
    @Autowired
    private PatientService patientService;

    @Autowired
    public CreatePatient(PatientService patientService, AuthenticationService authService) {
        this.patientService = patientService;
        this.authService = authService;
    }

    @Override
    public void createUser(AccountDetails accountDetails) {

        PatientDetails patientDetails = (PatientDetails) accountDetails;
        User user = new User(patientDetails.nom(), patientDetails.prenom(), patientDetails.email(), patientDetails.telephone());
        Patient patient = new Patient(patientDetails.numeroAssuranceMaladie(), patientDetails.dateNaissance(), user);
        Patient newPatient = patientService.createPatient(patient);
        authService.createAuthentification(newPatient.getUser(), patientDetails.mdp());
        /*try {
            System.out.println("ici 0");
            PatientDetails patientDetails = (PatientDetails) accountDetails;
            System.out.println("ici 1");
            User user = new User(patientDetails.nom(), patientDetails.prenom(), patientDetails.email(), patientDetails.telephone());
            System.out.println("ici 2");
            Patient patient = new Patient(patientDetails.numeroAssuranceMaladie(), patientDetails.dateNaissance(), user);
            System.out.println("ici 3");
            System.out.println(accountDetails instanceof PatientDetails);
            Patient newPatient = patientService.createPatient(patient);
            System.out.println("ici 4");
            authService.createAuthentification(newPatient.getUser(), patientDetails.mdp());
        } catch (Exception e) {
            e.printStackTrace(); // Print stack trace for debugging
        }*/


    }
}
