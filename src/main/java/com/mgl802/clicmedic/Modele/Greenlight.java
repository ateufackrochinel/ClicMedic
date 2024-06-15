package com.mgl802.clicmedic.Modele;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "Greenlights")
public class Greenlight {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "SpecialiteID", referencedColumnName = "id", nullable = false)
    private Specialite specialite;

    @ManyToOne
    @JoinColumn(name = "PatientID", referencedColumnName = "id", nullable = false)
    private Patient patient;

    @ManyToOne
    @JoinColumn(name = "MedecinID", referencedColumnName = "id", nullable = false)
    private Medecin medecin;

    @Column(name = "dateExpiration")
    private LocalDate dateExpiration;

    // Getters and Setters

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public Specialite getSpecialite() {
        return specialite;
    }

    public void setSpecialite(Specialite specialite) {
        this.specialite = specialite;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public LocalDate getDateExpiration() {
        return dateExpiration;
    }

    public void setDateDesuettude(LocalDate dateDesuettude) {
        this.dateExpiration = dateDesuettude;
    }

    public Medecin getMedecin() {
        return medecin;
    }

    public void setMedecin(Medecin medecin) {
        this.medecin = medecin;
    }

    public void setDateExpiration(LocalDate dateExpiration) {
        this.dateExpiration = dateExpiration;
    }
}
