package com.mgl802.clicmedic.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;

@Service
public class AuthenticationService {

    private final Map<String, AuthentificationStrategie> strategies;

    @Autowired
    public AuthenticationService(Map<String, AuthentificationStrategie> strategies) {
        this.strategies = strategies;
    }

    public Optional<String> authenticate(String identifiant, String mdp, String userType) {
        AuthentificationStrategie strategie = strategies.get(userType);

        if (strategie != null) {
            return strategie.authentification(identifiant, mdp);
        } else {
            return Optional.empty();
        }
    }
}