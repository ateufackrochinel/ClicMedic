package com.mgl802.clicmedic.Repository;

import com.mgl802.clicmedic.Modele.Authentification;
import com.mgl802.clicmedic.Modele.Medecin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface MedecinRepository extends JpaRepository<Medecin, UUID> {

    Optional<Medecin> findMedecinByNumeroEmploye(String numEmploye);

    @Query("SELECT m FROM Medecin m WHERE "
            + "(:specialiteId IS NULL OR m.specialite.id = :specialiteId) AND "
            + "(:userId IS NULL OR m.user.id = :userId) AND "
            + "(:numeroEmploye IS NULL OR m.numeroEmploye LIKE %:numeroEmploye%) AND "
            + "(:telephoneBureau IS NULL OR m.telephoneBureau LIKE %:telephoneBureau%) AND "
            + "(:lieuTravail IS NULL OR m.lieuTravail LIKE %:lieuTravail%)")
    List<Medecin> findByCriteria(@Param("specialiteId") UUID specialiteId,
                                 @Param("userId") UUID userId,
                                 @Param("numeroEmploye") String numeroEmploye,
                                 @Param("telephoneBureau") String telephoneBureau,
                                 @Param("lieuTravail") String lieuTravail);

}
