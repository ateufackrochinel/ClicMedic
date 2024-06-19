package com.mgl802.clicmedic.Modele;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "TypeRendezVous")
public class TypeRendezvous {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(name = "Nom", length = 100, nullable = false)
    private String nom;

    @Column(name = "Description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "DureeMinimum", nullable = false)
    private int dureeMinimum;

    @Column(name = "DureeMaximum", nullable = false)
    private int dureeMaximum;

    public TypeRendezvous(String nom, String description, int dureeMinimum, int dureeMaximum) {
        this.nom = nom;
        this.description = description;
        this.dureeMinimum = dureeMinimum;
        this.dureeMaximum = dureeMaximum;
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

    public int getDureeMinimum() {
        return dureeMinimum;
    }

    public void setDureeMinimum(int dureeMinimum) {
        this.dureeMinimum = dureeMinimum;
    }

    public int getDureeMaximum() {
        return dureeMaximum;
    }

    public void setDureeMaximum(int dureeMaximum) {
        this.dureeMaximum = dureeMaximum;
    }
}
