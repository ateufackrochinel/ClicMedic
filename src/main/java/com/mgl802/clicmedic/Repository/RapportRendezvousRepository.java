package com.mgl802.clicmedic.Repository;

import com.mgl802.clicmedic.Modele.RapportRendezvous;
import com.mgl802.clicmedic.Modele.Rendezvous;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface RapportRendezvousRepository extends JpaRepository<RapportRendezvous, UUID> {
}
