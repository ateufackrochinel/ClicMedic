package com.mgl802.clicmedic.Controlleur.jsontypes.AccountDetails;

import com.mgl802.clicmedic.Controlleur.jsontypes.AccountDetails.AccountDetails;

import java.time.LocalDate;
import java.util.UUID;

public record PatientDetails(String nom, String prenom, String email, String telephone, String mdp, String numeroAssuranceMaladie, LocalDate dateNaissance) implements AccountDetails {
}