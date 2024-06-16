package com.mgl802.clicmedic.Services;

import java.util.Optional;

public class PatientAuthenticationStrategie  implements AuthentificationStrategie{

    public Optional<String> authentification(String Identifiant, String mdp){

          //Reussir -> renvoyer token
        //echec ->
        return Optional.empty();

    }
}
