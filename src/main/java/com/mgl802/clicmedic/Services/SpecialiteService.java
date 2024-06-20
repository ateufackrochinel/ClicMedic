package com.mgl802.clicmedic.Services;

import com.mgl802.clicmedic.Modele.Specialite;
import com.mgl802.clicmedic.Repository.SpecialiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class SpecialiteService {

    @Autowired
    private SpecialiteRepository specialiteRepository;

    public Optional<Specialite> findSpecialiteById(UUID id) {
        return specialiteRepository.findById(id);
    }

    public List<Specialite> findAllSpecialites() {
        return specialiteRepository.findAll();
    }


}
