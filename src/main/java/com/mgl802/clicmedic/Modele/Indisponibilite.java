package com.mgl802.clicmedic.Modele;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "IndisponibiliteMedecin")

public class Indisponibilite {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "MedecinID", referencedColumnName = "id", nullable = false)
    private Medecin medecin;

    @Column(name = "DebutIndisponibilite")
    private LocalDateTime debutIndisponibilite;

    @Column(name = "FinIndisponibilite")
    private LocalDateTime finIndisponibilite;

    @Column(name = "Motif", columnDefinition = "TEXT")
    private String motif;

    @Column(name = "Recurrent", nullable = false)
    private boolean recurrent;

    @Column(name = "JourSemaine", nullable = false)
    private int jourSemaine;

    // Getters and Setters

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public Medecin getMedecin() {
        return medecin;
    }

    public void setMedecin(Medecin medecin) {
        this.medecin = medecin;
    }

    public LocalDateTime getDebutIndisponibilite() {
        return debutIndisponibilite;
    }

    public void setDebutIndisponibilite(LocalDateTime debutIndisponibilite) {
        // Null if recurrent
        if (this.recurrent) {
            this.debutIndisponibilite = null;
        } else {
            this.debutIndisponibilite = debutIndisponibilite;
        }
    }

    public LocalDateTime getFinIndisponibilite() {
        return finIndisponibilite;
    }

    public void setFinIndisponibilite(LocalDateTime finIndisponibilite) {
        // Null if recurrent
        if (this.recurrent) {
            this.finIndisponibilite = null;
        } else {
            this.finIndisponibilite = finIndisponibilite;
        }
    }

    public String getMotif() {
        return motif;
    }

    public void setMotif(String motif) {
        this.motif = motif;
    }

    public boolean isRecurrent() {
        return recurrent;
    }

    public void setRecurrent(boolean recurrent) {
        this.recurrent = recurrent;
        // Set JourSemaine to 0 if not recurrent
        if (!recurrent) {
            this.jourSemaine = 0;
        }
    }

    public int getJourSemaine() {
        return jourSemaine;
    }

    public void setJourSemaine(int jourSemaine) {
        // Only allow setting JourSemaine if recurrent
        if (this.recurrent && jourSemaine >= 1 && jourSemaine <= 7) {
            this.jourSemaine = jourSemaine;
        } else if (!this.recurrent) {
            this.jourSemaine = 0;
        }
    }

}
