package com.mgl802.clicmedic.Repository;

import com.mgl802.clicmedic.Modele.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface PatientRepository extends JpaRepository<Patient, UUID> {

    /*@Query("SELECT p FROM Patient p WHERE "
            + "(:numeroAssuranceMaladie IS NULL OR p.numeroAssuranceMaladie LIKE %:numeroAssuranceMaladie%) AND "
            + "(:dateNaissance IS NULL OR p.dateNaissance = :dateNaissance) AND "
            + "(:userId IS NULL OR p.user.id = :userId)")
    List<Patient> findByCriteria(@Param("numeroAssuranceMaladie") String numeroAssuranceMaladie,
                                 @Param("dateNaissance") LocalDate dateNaissance,
                                 @Param("userId") UUID userId);*/

    @Query("SELECT p FROM Patient p " +
            "JOIN p.user u " +
            "WHERE (:numeroAssuranceMaladie IS NULL OR p.numeroAssuranceMaladie LIKE %:numeroAssuranceMaladie%) AND " +
            "(:dateNaissance IS NULL OR p.dateNaissance = :dateNaissance) AND " +
            "(:userId IS NULL OR p.user.id = :userId) AND " +
            "(:nom IS NULL OR u.nom LIKE %:nom%) AND " +
            "(:prenom IS NULL OR u.prenom LIKE %:prenom%) AND " +
            "(:telephone IS NULL OR u.telephone LIKE %:telephone%)")
    List<Patient> findByCriteria(
            @Param("numeroAssuranceMaladie") String numeroAssuranceMaladie,
            @Param("dateNaissance") LocalDate dateNaissance,
            @Param("userId") UUID userId,
            @Param("nom") String nom,
            @Param("prenom") String prenom,
            @Param("telephone") String telephone);

    boolean existsById(UUID Id);

    @Query("SELECT p FROM Patient p JOIN Session s ON p.user.id = s.user.id WHERE s.token = :token")
    Optional<Patient> findPatientBySessionToken(@Param("token") String token);

}
