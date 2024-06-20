package com.mgl802.clicmedic.Controlleur.jsontypes;

import com.mgl802.clicmedic.Controlleur.jsontypes.JsonReturn;

public class JsonSuccess extends JsonReturn {
    private String state;

    public JsonSuccess(String message) {
        this.state = message;
    }

    public String getToken() {
        return state;
    }
}