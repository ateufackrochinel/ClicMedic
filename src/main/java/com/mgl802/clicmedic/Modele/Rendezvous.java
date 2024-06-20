package com.mgl802.clicmedic.Modele;

import java.time.LocalDateTime;
import java.util.UUID;
import jakarta.persistence.*;

@Entity
@Table(name = "RendezVous")

public class Rendezvous {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(name = "Titre", length = 100, nullable = false)
    private String titre;

    @Column(name = "Lieu", length = 255, nullable = false)
    private String lieu;

    /*@ManyToOne
    @JoinColumn(name = "TypeRendezVousID", referencedColumnName = "id", nullable = false)
    private TypeRendezvous typeRendezVous;*/

    @ManyToOne
    @JoinColumn(name = "PatientID", referencedColumnName = "id", nullable = false)
    private Patient patient;

    @ManyToOne
    @JoinColumn(name = "MedecinID", referencedColumnName = "id", nullable = false)
    private Medecin medecin;

    @Column(name = "TempsDebut", nullable = false)
    private LocalDateTime tempsDebut;

    @Column(name = "Duree", nullable = false)
    private int duree;

    @Column(name = "Notes", columnDefinition = "TEXT")
    private String notes;

    @OneToOne
    @JoinColumn(name = "RapportID", referencedColumnName = "id")
    private RapportRendezvous rapport;

    // ...

    public Rendezvous(){
    }

    public Rendezvous(String titre, String lieu, Patient patient, Medecin medecin, LocalDateTime tempsDebut, int duree, String notes) {
        this.titre = titre;
        this.lieu = lieu;
        this.patient = patient;
        this.medecin = medecin;
        this.tempsDebut = tempsDebut;
        this.duree = duree;
        this.notes = notes;
    }

    // Getters and Setters

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getLieu() {
        return lieu;
    }

    public void setLieu(String lieu) {
        this.lieu = lieu;
    }

    /*public TypeRendezvous getTypeRendezVous() {
        return typeRendezVous;
    }

    public void setTypeRendezVous(TypeRendezvous typeRendezVous) {
        this.typeRendezVous = typeRendezVous;
    }*/

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Medecin getMedecin() {
        return medecin;
    }

    public void setMedecin(Medecin medecin) {
        this.medecin = medecin;
    }

    public LocalDateTime getTempsDebut() {
        return tempsDebut;
    }

    public void setTempsDebut(LocalDateTime tempsDebut) {
        this.tempsDebut = tempsDebut;
    }

    public int getDuree() {
        return duree;
    }

    public void setDuree(int duree) {
        this.duree = duree;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public RapportRendezvous getRapport() {
        return rapport;
    }

    public void setRapport(RapportRendezvous rapport) {
        this.rapport = rapport;
    }

}
