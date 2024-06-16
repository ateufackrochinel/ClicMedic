package com.mgl802.clicmedic.Repository;

import com.mgl802.clicmedic.Modele.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository {

    @Query("SELECT u FROM User u JOIN Medecin m ON u.id = m.user.id WHERE m.numeroEmploye = :numeroEmploye")
    Optional<User> findUserByNumeroEmploye(@Param("numeroEmploye") String numeroEmploye);
}
