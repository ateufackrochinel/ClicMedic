package com.mgl802.clicmedic.Repository;

import com.mgl802.clicmedic.Modele.Authentification;
import com.mgl802.clicmedic.Modele.Medecin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface MedecinRepository extends JpaRepository<Medecin, UUID> {

    Optional<Medecin> findMedecinByNumeroEmploye(String numEmploye);


}
