package com.mgl802.clicmedic.Controlleur.jsontypes.JsonRendezVous;

import java.time.LocalDateTime;
import java.util.UUID;

public record BougerRendezvous(UUID id, LocalDateTime newDate) {
}
