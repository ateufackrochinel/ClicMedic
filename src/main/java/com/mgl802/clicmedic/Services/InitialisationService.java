package com.mgl802.clicmedic.Services;

import com.mgl802.clicmedic.Modele.Specialite;
import com.mgl802.clicmedic.Modele.TypeRendezvous;
import com.mgl802.clicmedic.Repository.SpecialiteRepository;
import com.mgl802.clicmedic.Repository.TypeRendezvousRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.util.Arrays;
import java.util.List;

@Service
public class InitialisationService {

    @Autowired
    private SpecialiteRepository specialiteRepository;

    @Autowired
    private TypeRendezvousRepository typeRendezvousRepository;

    @PostConstruct
    public void init() {
        initialiserSpecialites();
        initialiserTypesRendezvous();
    }

    private void initialiserSpecialites() {
        if (specialiteRepository.count() == 0) {
            List<Specialite> specialites = Arrays.asList(
                    new Specialite("Famille", "Médecin de Famille ou généraliste", false),
                    new Specialite("Cardiologie", "Médecin Cardiologue", true),
                    new Specialite("Dermatologie", "Dermatologie", true),
                    new Specialite("Neurologie", "Neurologie", true),
                    new Specialite("Pédiatrie", "Pédiatrie", true),
                    new Specialite("Psychiatrie", "Psychiatrie", true),
                    new Specialite("Radiologie", "Radiologie", true)
            );
            specialiteRepository.saveAll(specialites);
        }
    }

    private void initialiserTypesRendezvous() {
        if (typeRendezvousRepository.count() == 0) {
            List<TypeRendezvous> typesRendezvous = Arrays.asList(
                    new TypeRendezvous("Consultation", "Consultation avec un médecin", 15, 60),
                    new TypeRendezvous("Chirurgie", "Chirurgie", 60, 300),
                    new TypeRendezvous("Traitement", "Rendez-vous pour recevoir un traitement", 15, 300),
                    new TypeRendezvous("Suivi", "Rendez-vous pour faire le suivi", 15, 60),
                    new TypeRendezvous("Autre", "autre", 15, 300)
            );
            typeRendezvousRepository.saveAll(typesRendezvous);
        }
    }
}
