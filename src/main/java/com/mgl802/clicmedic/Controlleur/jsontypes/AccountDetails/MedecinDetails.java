package com.mgl802.clicmedic.Controlleur.jsontypes.AccountDetails;

import com.mgl802.clicmedic.Controlleur.jsontypes.AccountDetails.AccountDetails;

import java.util.UUID;

public record MedecinDetails(String nom, String prenom, String email, String telephone, String mdp, UUID specialisation, String numeroEmploye, String telephoneBureau, String lieuTravail, String NIMC) implements AccountDetails {
}