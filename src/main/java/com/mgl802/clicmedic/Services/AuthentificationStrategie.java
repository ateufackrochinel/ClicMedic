package com.mgl802.clicmedic.Services;

import com.mgl802.clicmedic.Modele.Authentification;
import com.mgl802.clicmedic.Modele.Session;
import com.mgl802.clicmedic.Repository.AuthentificationRepository;

import java.util.Optional;


public abstract class AuthentificationStrategie {

    protected AuthentificationRepository authRepository;
    private PasswordConfig passwordevaluate;
    public Optional<String> authentification(String identifiant, String mdp) {


        Optional<Authentification>  optAuthentification = findAuthentification(identifiant);


        if (optAuthentification.isEmpty()) {
            return Optional.empty();
        } else {

            //PasswordConfig passwordevaluate = new PasswordConfig();
            Boolean validAuth = passwordevaluate.comparePasswords(mdp, optAuthentification.get().getPasswordHash()) ;

            if (validAuth) {
                Session newSession = new Session();
                //newSession.publicGenerateToken();
                newSession.setUser(optAuthentification.get().getUser());

                SessionService sessionService = new SessionService();

                Session createSession = sessionService.createSession(newSession);

                return Optional.of(createSession.getToken());
            }

        }

        return Optional.empty();
    }

    protected abstract Optional<Authentification> findAuthentification(String identifiant);
}
