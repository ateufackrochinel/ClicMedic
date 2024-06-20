package com.mgl802.clicmedic.Services;

// Classe qui simule l'utilisation d'un service externe vérifiant si le NIMC d'un médecin est valide
// Si le NIMC n'est pas valide, soit le médecin est radié ou la personne n'est pas médecin
public class NIMCChecker {

    public static Boolean validateNIMC(String nimc) {

        if (nimc.length() == 12) {
            return true;
        }

        return false;
    }
}
