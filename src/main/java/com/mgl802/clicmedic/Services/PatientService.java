package com.mgl802.clicmedic.Services;

import com.mgl802.clicmedic.Modele.Patient;
import com.mgl802.clicmedic.Modele.User;
import com.mgl802.clicmedic.Repository.PatientRepository;
import com.mgl802.clicmedic.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PatientService {

    protected PatientRepository patientRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PlatformTransactionManager transactionManager;


    @Autowired
    public PatientService(PatientRepository patientRepository, UserRepository userRepository, PlatformTransactionManager transactionManager) {
        this.patientRepository = patientRepository;
        this.userRepository = userRepository;
        this.transactionManager = transactionManager;
    }

    public Patient createPatient(String numeroAssuranceMaladie, LocalDate dateNaissance, User user) {
        // Persist the User entity first if not already persisted
        if (user.getId() != null && userRepository.existsById(user.getId())) {
            throw new RuntimeException("User already exist");
        }

        userRepository.save(user);
        // Create and persist the Patient entity
        Patient patient = new Patient(numeroAssuranceMaladie, dateNaissance, user);
        return patientRepository.save(patient);
    }

    public Patient createPatient(Patient patient) {
        Patient createdPatient;
        TransactionStatus status = transactionManager.getTransaction(new DefaultTransactionDefinition());
        try {
            User user = patient.getUser();
            if (user.getId() != null && userRepository.existsById(user.getId())) {
                throw new RuntimeException("User already exist");
            }
            userRepository.save(user);
            createdPatient = patientRepository.save(patient);
            transactionManager.commit(status);

        } catch (Exception e) {
            transactionManager.rollback(status);
            throw e;
        }

        return createdPatient;

    }

    public List<Patient> executePatientSearch(String numeroAssuranceMaladie, LocalDate dateNaissance, UUID userId, String nom, String prenom, String telephone) {
        return patientRepository.findByCriteria(numeroAssuranceMaladie, dateNaissance, userId, nom, prenom, telephone);
    }

    public Optional<Patient> trouverPatientParToken(String token) {
        return patientRepository.findPatientBySessionToken(token);
    }
}
