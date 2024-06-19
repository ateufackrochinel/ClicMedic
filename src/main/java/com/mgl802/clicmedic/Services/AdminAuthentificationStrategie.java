package com.mgl802.clicmedic.Services;

import com.mgl802.clicmedic.Modele.Authentification;
import com.mgl802.clicmedic.Repository.AuthentificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service("admin")
public class AdminAuthentificationStrategie extends AuthentificationStrategie {


    @Autowired
    AdminAuthentificationStrategie(AuthentificationRepository authRepository) { this.authRepository = authRepository; }
    protected Optional<Authentification> findAuthentification(String identifiant) {

        return authRepository.findAuthentificationByAdminAdminId(identifiant);
    }
}
