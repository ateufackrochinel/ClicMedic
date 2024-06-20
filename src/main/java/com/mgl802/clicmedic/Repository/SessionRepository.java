package com.mgl802.clicmedic.Repository;

import com.mgl802.clicmedic.Modele.Session;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface SessionRepository extends JpaRepository<Session, UUID> {
    boolean existsByToken(String token);

    Optional<Session> findByToken(String token);
}
