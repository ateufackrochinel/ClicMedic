package com.mgl802.clicmedic.Modele;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "RapportRendezVous")
public class RapportRendezvous {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(name = "DateModification", nullable = false)
    private LocalDateTime dateModification;

    @Column(name = "Contenu", columnDefinition = "TEXT")
    private String contenu;


    // ...
    public RapportRendezvous() {}

    public RapportRendezvous(String contenu) {
        this.contenu = contenu;
    }

    @PrePersist
    public void prePersist() {
        dateModification = LocalDateTime.now();
    }
    @PreUpdate
    public void updateTimestamp() {
        dateModification = LocalDateTime.now();
    }

    // Getters and Setters

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public LocalDateTime getDateModification() {
        return dateModification;
    }

    public void setDateModification(LocalDateTime dateModification) {
        this.dateModification = dateModification;
    }

    public String getContenu() {
        return contenu;
    }

    public void setContenu(String contenu) {
        this.contenu = contenu;
    }
}
