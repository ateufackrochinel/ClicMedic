package com.mgl802.clicmedic.Controlleur;

import com.mgl802.clicmedic.Controlleur.jsontypes.AccountDetails.AccountDetails;
import com.mgl802.clicmedic.Controlleur.jsontypes.AccountDetails.NewAccountRequestBody;
import com.mgl802.clicmedic.Controlleur.jsontypes.JsonErrorReturn;
import com.mgl802.clicmedic.Controlleur.jsontypes.JsonReturn;
import com.mgl802.clicmedic.Controlleur.jsontypes.JsonSuccess;
import com.mgl802.clicmedic.Services.*;
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
    private final PatientService patientService;

    private final MedecinService medecinService;
    private final SpecialiteService specialiteService;
    /*private final NIMCChecker nimcChecker;*/

    private final AuthenticationService authService;

    @Autowired
    public AuthController(AuthenticationService authenticationService, PatientService patientService, AuthenticationService authService, MedecinService medecinService, SpecialiteService specialiteService/*, NIMCChecker nimcChecker*/) {
        this.authenticationService = authenticationService;
        this.patientService = patientService;
        this.authService = authService;
        this.medecinService = medecinService;
        this.specialiteService = specialiteService;
        /*this.nimcChecker = nimcChecker;*/
    }

    @PostMapping("/login")
    public ResponseEntity<JsonReturn> connexion(@RequestBody LoginRequest loginRequest) {

        if ( loginRequest.getIdentifiant() == null || loginRequest.getMdp() == null || loginRequest.getUserType() == null ) {
            String errorMessage = "json invalide";
            System.out.println(errorMessage);
            JsonErrorReturn errorMess = new JsonErrorReturn ( errorMessage );
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMess);
        }

        try {
            Optional<String> token = authenticationService.authenticate(loginRequest.getIdentifiant(), loginRequest.getMdp(), loginRequest.getUserType());

            if (token.isEmpty()) {
                String errorMessage = "identifiant ou mot de passe érroné";
                System.out.println(errorMessage);
                JsonErrorReturn errorMess = new JsonErrorReturn ( errorMessage );
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorMess);
            } else {
                TokenResponse tokenResponse = new TokenResponse(token.get());
                return ResponseEntity.ok(tokenResponse);
            }
        } catch (Exception e) {
            e.printStackTrace();
            String errorMessage = "Requête invalide ou erreur interne!!! I'M A TEAPOT!!!";
            System.out.println(errorMessage);
            JsonErrorReturn errorMess = new JsonErrorReturn ( errorMessage );
            return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT).body(errorMess);
        }




        //return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();;
    }

    /*@PostMapping("/create-account")
    public ResponseEntity<JsonReturn> compteCreation(@RequestBody NewAccountRequestBody newAccountRequest) {

        System.out.println("Received request: " + newAccountRequest);

        String type = newAccountRequest.type();

        CreateUser userCreator;

        if (type.equals(PermissionChecker.getMedecinAccess())) { // type.equals("medecin")
            userCreator = new CreateMedecin();
        } else if (type.equals(PermissionChecker.getPatientAccess())) { // (type.equals("patient"))
            userCreator = new CreatePatient();
        } else {
            String errorMessage = "type invalide : " + type;
            System.out.println(errorMessage);
            JsonErrorReturn errorMess = new JsonErrorReturn ( errorMessage );
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMess);
        }

        try {
            userCreator.createUser(newAccountRequest.accountDetails());

            return ResponseEntity.status(HttpStatus.CREATED).body(new JsonReturn());

        } catch (Exception e) {
            String errorMessage = "Requête invalide ou problème interne!!! I'M A TEAPOT!!!";
            System.out.println(errorMessage);
            JsonErrorReturn errorMess = new JsonErrorReturn ( errorMessage );
            return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT).body(errorMess);
        }


    }*/

    @PostMapping("/create-account")
    public ResponseEntity<JsonReturn> compteCreation(@RequestBody NewAccountRequestBody newAccountRequest) {
        String type = newAccountRequest.type();
        CreateUser userCreator;

        if (PermissionChecker.isMedecinAccess(type)) {
            userCreator = new CreateMedecin(medecinService, specialiteService, /*nimcChecker,*/ authService);
        } else if (PermissionChecker.isPatientAccess(type)) {
            userCreator = new CreatePatient(patientService, authService);
        } else {
            String errorMessage = "type invalide : " + type;
            JsonErrorReturn errorMess = new JsonErrorReturn(errorMessage);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMess);
        }

        try {
            userCreator.createUser(newAccountRequest.accountDetails());
            return ResponseEntity.status(HttpStatus.CREATED).body(new JsonSuccess("Inscription réussi"));
        } catch (Exception e) {
            e.printStackTrace();
            String errorMessage = "Requête invalide, Duplicate ou problème interne!!! I'M A TEAPOT!!!";
            JsonErrorReturn errorMess = new JsonErrorReturn(errorMessage);
            return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT).body(errorMess);
        }
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
