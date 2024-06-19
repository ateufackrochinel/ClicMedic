package com.mgl802.clicmedic.Repository;

import com.mgl802.clicmedic.Modele.Specialite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SpecialiteRepository extends JpaRepository<Specialite, UUID> {
}