package com.mgl802.clicmedic.Services;

import com.mgl802.clicmedic.Modele.Patient;
import com.mgl802.clicmedic.Modele.RapportRendezvous;
import com.mgl802.clicmedic.Modele.Rendezvous;
import com.mgl802.clicmedic.Repository.MedecinRepository;
import com.mgl802.clicmedic.Repository.PatientRepository;
import com.mgl802.clicmedic.Repository.RendezvousRepository;
import com.mgl802.clicmedic.Repository.RapportRendezvousRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import com.mgl802.clicmedic.Modele.Medecin;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class RendezvousService {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private MedecinRepository medecinRepository;

    @Autowired
    private PlatformTransactionManager transactionManager;

    @Autowired
    private RendezvousRepository rendezvousRepository;

    @Autowired
    private RapportRendezvousRepository rapportRendezvousRepository;

    @Autowired
    public RendezvousService(RendezvousRepository rendezvousRepository, RapportRendezvousRepository rapportRendezvousRepository, PlatformTransactionManager transactionManager, PatientRepository patientRepository, MedecinRepository medecinRepository) {
        this.rendezvousRepository = rendezvousRepository;
        this.rapportRendezvousRepository = rapportRendezvousRepository;
        this.transactionManager = transactionManager;
        this.patientRepository = patientRepository;
        this.medecinRepository = medecinRepository;
    }


    /*public List<Rendezvous> findByMedecinIdAndDateRange(UUID medecinId, LocalDateTime startDate, LocalDateTime endDate) {
        return rendezvousRepository.findByMedecinIdAndDateRange(medecinId, startDate, endDate);
    }*/


    public List<Rendezvous> findByPatientId(UUID patientId) {
        return rendezvousRepository.findByPatientId(patientId);
    }


    private Rendezvous createRendezvous(Rendezvous rendezvous) {
        Rendezvous createdRendezvous;
        TransactionStatus status = transactionManager.getTransaction(new DefaultTransactionDefinition());
        try {

            LocalDateTime startDate = rendezvous.getTempsDebut();
            LocalDateTime endDate = startDate.plusMinutes(rendezvous.getDuree());

            List<Rendezvous> rendezvousConflitsMedecin = rendezvousRepository.findOverlappingRendezvousForMedecin(rendezvous.getMedecin().getId(), startDate, endDate);
            if (!rendezvousConflitsMedecin.isEmpty()) {
                throw new RuntimeException("Conflit d'horaire du côté du médecin");
            }

            List<Rendezvous> rendezvousConlitsPatient = rendezvousRepository.findOverlappingRendezvousForPatient(rendezvous.getPatient().getId(), startDate, endDate);
            if (!rendezvousConlitsPatient.isEmpty()) {
                throw new RuntimeException("Conflit d'horaire du côté du patient");
            }

            RapportRendezvous rapport = new RapportRendezvous("Rapport du Rendez-Vous");
            rapport = rapportRendezvousRepository.save(rapport);
            rendezvous.setRapport(rapport);

            createdRendezvous = rendezvousRepository.save(rendezvous);

            transactionManager.commit(status);
        } catch (Exception e) {
            transactionManager.rollback(status);
            throw e;
        }

        return createdRendezvous;
    }

    public Rendezvous rendezvousCreation(String titre, String lieu, UUID patientId, UUID medecinId, LocalDateTime debut, int duree, String notes) {

        Optional<Patient> patient = patientRepository.findById(patientId);

        Optional<Medecin> medecin = medecinRepository.findById(medecinId);

        if (medecin.isEmpty() || patient.isEmpty()) {
            throw new RuntimeException("Patient ou/et Medecin n'existe pas dans le système");
        }

        return createRendezvous(new Rendezvous(titre, lieu, patient.get(), medecin.get(), debut, duree, notes));
    }

    public List<Rendezvous> getRendezvousByMedecinIdAndDateRange(UUID medecinId, LocalDateTime startDate, LocalDateTime endDate) {
        return rendezvousRepository.findByMedecinIdAndDateRange(medecinId, startDate, endDate);
    }

    public Optional<Rendezvous> getRendezvousByRendezvousId(UUID rendezvousId){
        return rendezvousRepository.findById(rendezvousId);
    }

    public void updateRendezvousTime(UUID rendezvousId, LocalDateTime newDate){

        Optional<Rendezvous> rendezvous = rendezvousRepository.findById(rendezvousId);

        if ( rendezvous.isEmpty()) {

            throw new RuntimeException(" le rendezvous n'existe pas dans le systeme");
                 }
        rendezvous.get().setTempsDebut(newDate);

        rendezvousRepository.save(rendezvous.get());


    }
}
