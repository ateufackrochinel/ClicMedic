package com.mgl802.clicmedic.Services;

import com.mgl802.clicmedic.Controlleur.jsontypes.AccountDetails.AccountDetails;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class CreateUser {

    @Autowired
    protected AuthenticationService authService;

    public abstract void createUser(AccountDetails accountDetails);

}
