package com.mgl802.clicmedic.Services;

import com.mgl802.clicmedic.Modele.Authentification;
import com.mgl802.clicmedic.Modele.Medecin;
import com.mgl802.clicmedic.Modele.Session;
import com.mgl802.clicmedic.Repository.AuthentificationRepository;
import com.mgl802.clicmedic.Repository.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service("medecin")
public class MedecinAuthenticationStrategie extends AuthentificationStrategie {

    @Autowired
    MedecinAuthenticationStrategie(AuthentificationRepository authRepository) { this.authRepository = authRepository; }
    protected Optional<Authentification> findAuthentification(String identifiant) {

        return authRepository.findAuthentificationByMedecinNumeroEmploye(identifiant);
    }
}
