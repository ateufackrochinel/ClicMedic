package com.mgl802.clicmedic.Repository;

import com.mgl802.clicmedic.Modele.Rendezvous;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface RendezvousRepository extends JpaRepository<Rendezvous, UUID> {


    @Query("SELECT r FROM Rendezvous r WHERE r.medecin.id = :medecinId AND r.tempsDebut > :startDate AND r.tempsDebut < :endDate")
    List<Rendezvous> findByMedecinIdAndDateRange(
            @Param("medecinId") UUID medecinId,
            @Param("startDate") LocalDateTime startDate,
            @Param("endDate") LocalDateTime endDate
    );

    List<Rendezvous> findByPatientId(UUID patientId);

   // List<Rendezvous> findByRendezvousId(UUID rendezvousId);

    @Override
    Optional<Rendezvous> findById(UUID uuid);

    @Query("SELECT r FROM Rendezvous r WHERE r.medecin.id = :medecinId AND " +
            "((:startDate BETWEEN r.tempsDebut AND FUNCTION('ADDTIME', r.tempsDebut, FUNCTION('SEC_TO_TIME', r.duree * 60))) OR " +
            "(:endDate BETWEEN r.tempsDebut AND FUNCTION('ADDTIME', r.tempsDebut, FUNCTION('SEC_TO_TIME', r.duree * 60))) OR " +
            "(r.tempsDebut BETWEEN :startDate AND :endDate))")
    List<Rendezvous> findOverlappingRendezvousForMedecin(
            @Param("medecinId") UUID medecinId,
            @Param("startDate") LocalDateTime startDate,
            @Param("endDate") LocalDateTime endDate
    );

    @Query("SELECT r FROM Rendezvous r WHERE r.patient.id = :patientId AND " +
            "((:startDate BETWEEN r.tempsDebut AND FUNCTION('ADDTIME', r.tempsDebut, FUNCTION('SEC_TO_TIME', r.duree * 60))) OR " +
            "(:endDate BETWEEN r.tempsDebut AND FUNCTION('ADDTIME', r.tempsDebut, FUNCTION('SEC_TO_TIME', r.duree * 60))) OR " +
            "(r.tempsDebut BETWEEN :startDate AND :endDate))")
    List<Rendezvous> findOverlappingRendezvousForPatient(
            @Param("patientId") UUID patientId,
            @Param("startDate") LocalDateTime startDate,
            @Param("endDate") LocalDateTime endDate
    );
}
