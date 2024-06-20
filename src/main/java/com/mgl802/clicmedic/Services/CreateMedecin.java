package com.mgl802.clicmedic.Services;

import com.mgl802.clicmedic.Controlleur.jsontypes.AccountDetails.AccountDetails;
import com.mgl802.clicmedic.Controlleur.jsontypes.AccountDetails.MedecinDetails;
import com.mgl802.clicmedic.Modele.Medecin;
import com.mgl802.clicmedic.Modele.Specialite;
import com.mgl802.clicmedic.Modele.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CreateMedecin extends CreateUser {

    @Autowired
    private MedecinService medecinService;

    @Autowired
    private SpecialiteService specialiteService;

    /*@Autowired
    private NIMCChecker nimcChecker;*/

    public CreateMedecin(MedecinService medecinService, SpecialiteService specialiteService, /*NIMCChecker nimcChecker,*/ AuthenticationService authService) {
        this.medecinService = medecinService;
        this.specialiteService = specialiteService;
        /*this.nimcChecker = nimcChecker;*/
        this.authService = authService;
    }

    @Override
    public void createUser(AccountDetails accountDetails) {

        MedecinDetails medecinDetails = (MedecinDetails) accountDetails;

        if (!NIMCChecker.validateNIMC(medecinDetails.NIMC())) {
            throw new RuntimeException("Invalid NIMC!");
        }

        User user = new User(medecinDetails.nom(), medecinDetails.prenom(), medecinDetails.email(), medecinDetails.telephone());
        Optional<Specialite> specialite = specialiteService.findSpecialiteById(medecinDetails.specialisation());

        if (specialite.isEmpty()) {
            throw new RuntimeException("specialite not found");
        }

        Medecin medecin = new Medecin(specialite.get(), user, medecinDetails.numeroEmploye(), medecinDetails.telephoneBureau(), medecinDetails.lieuTravail(), medecinDetails.NIMC());

        Medecin newMedecin = medecinService.createMedecin(medecin);

        authService.createAuthentification(newMedecin.getUser(), medecinDetails.mdp());


    }
}
