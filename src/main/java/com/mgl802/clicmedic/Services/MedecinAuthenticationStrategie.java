package com.mgl802.clicmedic.Services;

import com.mgl802.clicmedic.Modele.Authentification;
import com.mgl802.clicmedic.Modele.Medecin;
import com.mgl802.clicmedic.Repository.AuthentificationRepository;

import java.util.Optional;

public class MedecinAuthenticationStrategie implements AuthentificationStrategie {

    private AuthentificationRepository authRepository;
    public Optional<String> authentification(String Identifiant, String mdp){

      Optional<Authentification>  optAuthentification= authRepository.findAuthentificationByMedecinNumeroEmploye(Identifiant);

      if (optAuthentification.isEmpty()) {
            return Optional.empty();
        }else {

          PasswordConfig passwordevaluete= new PasswordConfig();
          Boolean mdpetat= passwordevaluete.comparePasswords(mdp, optAuthentification.get().getPasswordHash()) ;



      }


        return Optional.empty();
    }
}
