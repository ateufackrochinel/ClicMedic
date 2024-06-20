package com.mgl802.clicmedic.Modele;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "Specialites")
public class Specialite {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(name = "Nom", length = 100, nullable = false)
    private String nom;

    @Column(name = "Description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "Need_Greenlight", nullable = false)
    private Boolean needGreenlight;

    // Default constructor for JPA
    public Specialite() {}

    public Specialite(String nom, String description, Boolean needGreenlight) {
        this.nom = nom;
        this.description = description;
        this.needGreenlight = needGreenlight;
    }

    // Getters and Setters

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getNeedGreenlight() { return needGreenlight; }
}
