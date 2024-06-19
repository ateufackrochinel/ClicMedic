package com.mgl802.clicmedic.Controlleur;

import com.mgl802.clicmedic.Controlleur.jsontypes.JsonErrorReturn;
import com.mgl802.clicmedic.Controlleur.jsontypes.JsonReturn;
import com.mgl802.clicmedic.Services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationService authenticationService;

    @Autowired
    public AuthController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/login")
    public ResponseEntity<JsonReturn> connexion(@RequestBody LoginRequest loginRequest) {

        if ( loginRequest.getIdentifiant() == null || loginRequest.getMdp() == null || loginRequest.getUserType() == null ) {
            String errorMessage = "json invalide";
            System.out.println(errorMessage);
            JsonErrorReturn errorMess = new JsonErrorReturn ( errorMessage );
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMess);
        }

        Optional<String> token = authenticationService.authenticate(loginRequest.getIdentifiant(), loginRequest.getMdp(), loginRequest.getUserType());

        System.out.println(loginRequest.getIdentifiant());
        System.out.println("@,@");

        if (token.isEmpty()) {
            String errorMessage = "identifiant ou mot de passe érroné";
            System.out.println(errorMessage);
            JsonErrorReturn errorMess = new JsonErrorReturn ( errorMessage );
            return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT).body(errorMess);
        } else {
            TokenResponse tokenResponse = new TokenResponse(token.get());
            return ResponseEntity.ok(tokenResponse);
        }


        //return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();;
    }

    @PostMapping("/create-account")
    public String compteCreation() {
        return "Hello, World!";
    }

    //////////////////////////////////////////////////////////////////
    // Requests types
    //////////////////////////////////////////////////////////////////
    public static class LoginRequest {

        private String identifiant;

        private String mdp;

        private String userType;

        // Getters and setters
        public String getIdentifiant() { return identifiant; }

        public String getMdp() { return mdp; }

        public String getUserType() { return userType; }

    }


    //////////////////////////////////////////////////////////////////
    // Responses types
    //////////////////////////////////////////////////////////////////
    private class TokenResponse extends JsonReturn {
        private String token;

        public TokenResponse(String token) {
            this.token = token;
        }

        public String getToken() {
            return token;
        }
    }
}
