package com.mgl802.clicmedic.Controlleur.jsontypes.JsonRendezVous;

import java.time.LocalDateTime;
import java.util.UUID;

public record PatientCreateRendezVous(String titre, String lieu, UUID medecinId, LocalDateTime debut, int duree, String notes) implements CreateRendezVous {
}
