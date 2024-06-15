package com.mgl802.clicmedic.Modele;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "Medecins")
public class Medecin {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @OneToOne
    @JoinColumn(name = "SpecialiteID", referencedColumnName = "id", nullable = false)
    private Specialite specialite;

    @OneToOne
    @JoinColumn(name = "UserID", referencedColumnName = "id", nullable = false)
    private User user;

    @Column(name = "NumeroEmploye", length = 100, nullable = false)
    private String numeroEmploye;

    @Column(name = "TelephoneBureau", length = 20)
    private String telephoneBureau;

    @Column(name = "LieuTravail", length = 255)
    private String lieuTravail;

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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getNumeroEmploye() {
        return numeroEmploye;
    }

    public void setNumeroEmploye(String numeroEmploye) {
        this.numeroEmploye = numeroEmploye;
    }

    public String getTelephoneBureau() {
        return telephoneBureau;
    }

    public void setTelephoneBureau(String telephoneBureau) {
        this.telephoneBureau = telephoneBureau;
    }

    public String getLieuTravail() {
        return lieuTravail;
    }

    public void setLieuTravail(String lieuTravail) {
        this.lieuTravail = lieuTravail;
    }
}
