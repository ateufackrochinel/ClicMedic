package com.mgl802.clicmedic.Controlleur.jsontypes.AccountDetails;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;

import java.io.IOException;

public class AccountDetailsDeserializer extends JsonDeserializer<NewAccountRequestBody> {
    @Override
    public NewAccountRequestBody deserialize(JsonParser jp, DeserializationContext ctxt)
            throws IOException, JsonProcessingException {
        JsonNode node = jp.getCodec().readTree(jp);
        String type = node.get("type").asText();
        JsonNode accountDetailsNode = node.get("accountDetails");

        AccountDetails accountDetails;
        if ("medecin".equals(type)) {
            accountDetails = jp.getCodec().treeToValue(accountDetailsNode, MedecinDetails.class);
        } else if ("patient".equals(type)) {
            accountDetails = jp.getCodec().treeToValue(accountDetailsNode, PatientDetails.class);
        } else {
            throw new RuntimeException("Unknown type: " + type);
        }

        return new NewAccountRequestBody(type, accountDetails);
    }
}
