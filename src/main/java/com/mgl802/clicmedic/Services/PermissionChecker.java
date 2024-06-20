package com.mgl802.clicmedic.Services;

public class PermissionChecker {

    private static final String patientAccess = "patient";
    private static final String medecinAccess = "medecin";

    public static String getMedecinAccess() {
        return medecinAccess;
    }

    public static String getPatientAccess() {
        return patientAccess;
    }

    public static  Boolean isPatientAccess(String receivedUserType) {
        return patientAccess.equals(receivedUserType);
    }

    public static  Boolean isMedecinAccess(String receivedUserType) {
        return medecinAccess.equals(receivedUserType);
    }

}
