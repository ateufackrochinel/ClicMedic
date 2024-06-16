package com.mgl802.clicmedic.Services;

import java.util.Optional;

public interface AuthentificationStrategie {

    public Optional<String> authentification(String Identifiant, String mdp);
}
