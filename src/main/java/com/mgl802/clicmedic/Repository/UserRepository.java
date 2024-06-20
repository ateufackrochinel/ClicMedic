package com.mgl802.clicmedic.Repository;

import com.mgl802.clicmedic.Modele.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {

    @Query("SELECT u FROM User u JOIN Medecin m ON u.id = m.user.id WHERE m.numeroEmploye = :numeroEmploye")
    Optional<User> findUserByNumeroEmploye(@Param("numeroEmploye") String numeroEmploye);

    boolean existsById(UUID Id);
}
