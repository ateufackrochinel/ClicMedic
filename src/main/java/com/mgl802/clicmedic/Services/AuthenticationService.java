package com.mgl802.clicmedic.Services;

import com.mgl802.clicmedic.Modele.Authentification;
import com.mgl802.clicmedic.Modele.User;
import com.mgl802.clicmedic.Repository.AuthentificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mgl802.clicmedic.Repository.UserRepository;

import java.util.Map;
import java.util.Optional;

@Service
public class AuthenticationService {

    private final Map<String, AuthentificationStrategie> strategies;
    private final PasswordConfig passConfig;
    private final UserRepository userRepository;

    private final AuthentificationRepository authRepository;

    @Autowired
    public AuthenticationService(Map<String, AuthentificationStrategie> strategies, PasswordConfig passConfig, UserRepository userRepository, AuthentificationRepository authRepository) {
        this.strategies = strategies;
        this.passConfig = passConfig;
        this.userRepository = userRepository;
        this.authRepository = authRepository;
    }

    public Optional<String> authenticate(String identifiant, String mdp, String userType) {
        AuthentificationStrategie strategie = strategies.get(userType);

        if (strategie != null) {
            return strategie.authentification(identifiant, mdp);
        } else {
            return Optional.empty();
        }
    }

    public Authentification createAuthentification(User user, String mdp) {

        String mdpHash = PasswordConfig.hashPassword(mdp);

        if (user.getId() == null || !userRepository.existsById(user.getId())) {

            throw new RuntimeException("User does not exist");
        }

        Authentification auth = new Authentification(user, mdpHash);
        return authRepository.save(auth);
    }

}