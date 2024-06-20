package com.mgl802.clicmedic.Services;

import com.mgl802.clicmedic.Modele.Session;
import com.mgl802.clicmedic.Repository.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SessionService {

    @Autowired
    private SessionRepository sessionRepository;

    public Session createSession(Session session) {

        // Ensure the token is generated if it is null or its length is below 255
        if (session.getToken() == null || session.getToken().length() < 255) {
            session.setToken(session.publicGenerateToken());
        }

        // Ensure the token is unique
        while (sessionRepository.existsByToken(session.getToken())) {
            session.setToken(session.publicGenerateToken()); // Generate a new token if it already exists
        }
        return sessionRepository.save(session);
    }

    public boolean isTokenExists(String token) {
        return sessionRepository.existsByToken(token);
    }

    public Optional<Session> findByToken(String token) {
        return sessionRepository.findByToken(token);
    }
}
