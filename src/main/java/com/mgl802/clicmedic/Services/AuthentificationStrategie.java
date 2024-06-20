package com.mgl802.clicmedic.Services;

import com.mgl802.clicmedic.Modele.Authentification;
import com.mgl802.clicmedic.Modele.Session;
import com.mgl802.clicmedic.Repository.AuthentificationRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;


public abstract class AuthentificationStrategie {

    @Autowired
    protected SessionService sessionService;
    protected AuthentificationRepository authRepository;
    private PasswordConfig passwordevaluate;
    public Optional<String> authentification(String identifiant, String mdp) {


        Optional<Authentification>  optAuthentification = findAuthentification(identifiant); // access to type defined in child


        if (optAuthentification.isEmpty()) {
            return Optional.empty();
        } else {

            //PasswordConfig passwordevaluate = new PasswordConfig();
            Boolean validAuth = passwordevaluate.comparePasswords(mdp, optAuthentification.get().getPasswordHash()) ;

            if (validAuth) {
                Session newSession = new Session();
                //newSession.publicGenerateToken();
                newSession.setUser(optAuthentification.get().getUser());

                newSession.setTypeUser(getTypeAccess()); // use function defined in child to know type of user

                Session createSession = sessionService.createSession(newSession);

                return Optional.of(createSession.getToken());
            }

        }

        return Optional.empty();
    }

    protected abstract Optional<Authentification> findAuthentification(String identifiant);

    protected abstract String getTypeAccess();
}
