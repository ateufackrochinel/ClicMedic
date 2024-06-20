package com.mgl802.clicmedic.Services;

import com.mgl802.clicmedic.Modele.Medecin;
import com.mgl802.clicmedic.Modele.User;
import com.mgl802.clicmedic.Repository.MedecinRepository;
import com.mgl802.clicmedic.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class MedecinService {

    @Autowired
    protected MedecinRepository medRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PlatformTransactionManager transactionManager;

    /*@Autowired
    public MedecinService(MedecinRepository medRepository) {
        this.medRepository = medRepository;
    }*/

    public List<Medecin> executeMedecinSearch(UUID specialiteId, UUID userId, String numeroEmploye, String telephoneBureau, String lieuTravail, String nom, String prenom, String telephone) {
        return medRepository.findByCriteria(specialiteId, userId, numeroEmploye, telephoneBureau, lieuTravail, nom, prenom, telephone);
    }

    public Medecin createMedecin(Medecin medecin) {
        Medecin createdMedecin;
        TransactionStatus status = transactionManager.getTransaction(new DefaultTransactionDefinition());
        try {
            User user = medecin.getUser();
            if (user.getId() != null && medRepository.existsById(user.getId())) {
                throw new RuntimeException("User already exist");
            }
            userRepository.save(user);
            createdMedecin = medRepository.save(medecin);

            transactionManager.commit(status);
        } catch (Exception e) {
            transactionManager.rollback(status);
            throw e;
        }

        return createdMedecin;

    }

    public Optional<Medecin> trouverMedecinParSessionToken(String token) {
        return medRepository.findMedecinBySessionToken(token);
    }
}
