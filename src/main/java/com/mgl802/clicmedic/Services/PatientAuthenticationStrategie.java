package com.mgl802.clicmedic.Services;

import com.mgl802.clicmedic.Modele.Authentification;
import com.mgl802.clicmedic.Modele.Session;
import com.mgl802.clicmedic.Repository.AuthentificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service("patient")
public class PatientAuthenticationStrategie  extends AuthentificationStrategie{

    @Autowired
    PatientAuthenticationStrategie(AuthentificationRepository authRepository) { this.authRepository = authRepository; }

    protected Optional<Authentification> findAuthentification(String identifiant) {

        return authRepository.findAuthentificationByPatientNumeroAssuranceMaladie(identifiant);
    }

}
