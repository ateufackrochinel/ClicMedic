/*package com.mgl802.clicmedic.Controlleur.jsontypes.AccountDetails;

import java.util.UUID;

public interface AccountDetails {
    String nom();
    String prenom();
    String telephone();
    String email();
    String mdp();
}*/

/*package com.mgl802.clicmedic.Controlleur.jsontypes.AccountDetails;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize(using = AccountDetailsDeserializer.class)
public interface AccountDetails {
    String nom();
    String prenom();
    String telephone();
    String email();
    String mdp();
}*/

package com.mgl802.clicmedic.Controlleur.jsontypes.AccountDetails;

public interface AccountDetails {
    String nom();
    String prenom();
    String telephone();
    String email();
    String mdp();
}
