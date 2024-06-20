package com.mgl802.clicmedic.Controlleur.jsontypes.JsonRendezVous;

import java.time.LocalDateTime;
import java.util.UUID;

public interface CreateRendezVous {

    String titre();
    String lieu();
    LocalDateTime debut();
    int duree();
    String notes();
}
