package com.mgl802.clicmedic.Repository;

import com.mgl802.clicmedic.Modele.TypeRendezvous;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TypeRendezvousRepository extends JpaRepository<TypeRendezvous, UUID> {
}