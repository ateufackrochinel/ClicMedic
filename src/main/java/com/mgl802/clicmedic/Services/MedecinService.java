package com.mgl802.clicmedic.Services;

import com.mgl802.clicmedic.Modele.Medecin;
import com.mgl802.clicmedic.Repository.MedecinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class MedecinService {

    protected MedecinRepository medRepository;

    @Autowired
    public MedecinService(MedecinRepository medRepository) {
        this.medRepository = medRepository;
    }

    public List<Medecin> executeMedecinSearch(UUID specialiteId, UUID userId, String numeroEmploye, String telephoneBureau, String lieuTravail) {
        return medRepository.findByCriteria(specialiteId, userId, numeroEmploye, telephoneBureau, lieuTravail);
    }
}
