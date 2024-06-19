package com.mgl802.clicmedic.Controlleur.jsontypes;

public class JsonErrorReturn extends JsonReturn {

    private String messageErreur;

    public JsonErrorReturn (String messErr) {
        this.messageErreur = messErr;
    }

    public String getMessageErreur() {
        return messageErreur;
    }
}
