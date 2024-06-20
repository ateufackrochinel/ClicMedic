package com.mgl802.clicmedic.Controlleur.jsontypes.JsonRendezVous;

import java.time.LocalDateTime;
import java.util.UUID;

public record MedecinCreateRendezVous(String titre, String lieu, UUID patientId, LocalDateTime debut, int duree, String notes) implements CreateRendezVous {
}
