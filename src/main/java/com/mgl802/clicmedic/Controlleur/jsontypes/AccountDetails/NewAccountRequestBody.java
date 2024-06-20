/*package com.mgl802.clicmedic.Controlleur.jsontypes.AccountDetails;

public record NewAccountRequestBody(String type, AccountDetails accountDetails) {
}*/


package com.mgl802.clicmedic.Controlleur.jsontypes.AccountDetails;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize(using = AccountDetailsDeserializer.class)
public record NewAccountRequestBody(String type, AccountDetails accountDetails) {
}