package com.mgl802.clicmedic.Repository;

import com.mgl802.clicmedic.Modele.Authentification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.UUID;

public interface AuthentificationRepository extends JpaRepository<Authentification, UUID> {


    @Query("SELECT a FROM Authentification a " +
            "JOIN a.user u " +
            "JOIN Medecin m ON u.id = m.user.id " +
            "WHERE m.numeroEmploye = :numeroEmploye")
    Optional<Authentification> findAuthentificationByMedecinNumeroEmploye(@Param("numeroEmploye") String numeroEmploye);

}
