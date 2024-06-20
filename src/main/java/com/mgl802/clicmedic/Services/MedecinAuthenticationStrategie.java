package com.mgl802.clicmedic.Services;

import com.mgl802.clicmedic.Modele.Authentification;
import com.mgl802.clicmedic.Modele.Medecin;
import com.mgl802.clicmedic.Modele.Session;
import com.mgl802.clicmedic.Repository.AuthentificationRepository;
import com.mgl802.clicmedic.Repository.MedecinRepository;
import com.mgl802.clicmedic.Repository.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service("medecin")
public class MedecinAuthenticationStrategie extends AuthentificationStrategie {

    private MedecinRepository medecinRepository;

    @Autowired
    MedecinAuthenticationStrategie(AuthentificationRepository authRepository, MedecinRepository medecinRepository, SessionService sessionService) {
        this.authRepository = authRepository;
        this.medecinRepository = medecinRepository;
        this.sessionService = sessionService;
    }
    protected Optional<Authentification> findAuthentification(String identifiant) {

        return authRepository.findAuthentificationByMedecinNumeroEmploye(identifiant);
    }

    @Override
    protected String getTypeAccess() {
        return PermissionChecker.getMedecinAccess();
    }

    @Override
    public Optional<String> authentification(String identifiant, String mdp) {

        Optional<Medecin> leMedecin = medecinRepository.findMedecinByNumeroEmploye(identifiant);

        if ((leMedecin.isEmpty()) || (!NIMCChecker.validateNIMC(leMedecin.get().getNIMC()))) {
            throw new RuntimeException("medecin either does not exist or his/her NIMC isn't valid anymore");
        }

        return super.authentification(identifiant, mdp);
    }
}
