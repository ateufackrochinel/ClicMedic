package com.mgl802.clicmedic.Controlleur;

import com.mgl802.clicmedic.Controlleur.jsontypes.JsonErrorReturn;
import com.mgl802.clicmedic.Controlleur.jsontypes.JsonRendezVous.MedecinCreateRendezVous;
import com.mgl802.clicmedic.Controlleur.jsontypes.JsonRendezVous.PatientCreateRendezVous;
import com.mgl802.clicmedic.Controlleur.jsontypes.JsonReturn;
import com.mgl802.clicmedic.Controlleur.jsontypes.JsonSuccess;
import com.mgl802.clicmedic.Modele.*;
import com.mgl802.clicmedic.Services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/clicmedic")
public class RendezVousController {

    private final MedecinService medecinService;
    private  final PatientService patientService;

    private final RendezvousService rendezvousService;
    private  final SpecialiteService specialiteService;

    private final SessionService sessionService;

    @Autowired
    public RendezVousController(MedecinService medecinService, PatientService patientService, SpecialiteService specialiteService, SessionService sessionService, RendezvousService rendezvousService) {
        this.medecinService = medecinService;
        this.patientService = patientService;
        this.specialiteService = specialiteService;
        this.sessionService = sessionService;
        this.rendezvousService = rendezvousService;
    }
    @GetMapping("/medecin")
    public ResponseEntity<JsonReturn> rechercheMedecin(
            @RequestParam(name="specialiteId", required = false) UUID specialiteId,
            @RequestParam(name="userId", required = false) UUID userId,
            @RequestParam(name="numeroEmploye", required = false) String numeroEmploye,
            @RequestParam(name="telephoneBureau", required = false) String telephoneBureau,
            @RequestParam(name="lieuTravail", required = false) String lieuTravail,
            @RequestParam(name="nom", required = false) String nom,
            @RequestParam(name="prenom", required = false) String prenom,
            @RequestParam(name="telephone", required = false) String telephone
    ) {

        List<Medecin> resultats = medecinService.executeMedecinSearch(specialiteId, userId, numeroEmploye, telephoneBureau, lieuTravail, nom, prenom, telephone);

        MedecinSearchResponse response = new MedecinSearchResponse(resultats);


        return ResponseEntity.ok(response);
    }

    @GetMapping("/medecin/horaire/{medecinId}")
    public ResponseEntity<JsonReturn> getHoraireMedecin(
            @PathVariable(name="medecinId", required = true) UUID medecinId,
            @RequestParam(name="startDate", required = true) LocalDateTime startDate,
            @RequestParam(name="endDate", required = true) LocalDateTime endDate
    ) {

        List<Rendezvous> horaire = rendezvousService.getRendezvousByMedecinIdAndDateRange(medecinId, startDate, endDate);

        HoraireResponse horaireRes = new HoraireResponse(horaire);

        return ResponseEntity.ok(horaireRes);
    }

    @PostMapping("/rendez-vous/patient")
    public ResponseEntity<JsonReturn> patientCreateRendezVous(
            @RequestBody PatientCreateRendezVous patientCreateRendezVous,
            @RequestHeader(value = "Authorization", required = true
            ) String authorizationHeader) {


        if (authorizationHeader == null) {
            String errorMessage = "Authentification requise";
            System.out.println(errorMessage);
            JsonErrorReturn errorMess = new JsonErrorReturn ( errorMessage );
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorMess);
        }
        try {
            Optional<Patient> patient = patientService.trouverPatientParToken(authorizationHeader);

            if (patient.isEmpty()) {
                String errorMessage = "Authentification requise - Session inconnue";
                System.out.println(errorMessage);
                JsonErrorReturn errorMess = new JsonErrorReturn ( errorMessage );
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorMess);
            }

            rendezvousService.rendezvousCreation(
                    patientCreateRendezVous.titre(),
                    patientCreateRendezVous.lieu(),
                    patient.get().getId(),
                    patientCreateRendezVous.medecinId(),
                    patientCreateRendezVous.debut(),
                    patientCreateRendezVous.duree(),
                    patientCreateRendezVous.notes()
            );

            return ResponseEntity.ok(new JsonSuccess("Rendez-vous créé..."));

        } catch (Exception e) {
            e.printStackTrace();
            String errorMessage = "Élément inexistant, requête invalide, conflit ou erreur interne!!! I'M A TEAPOT!!!";
            System.out.println(errorMessage);
            JsonErrorReturn errorMess = new JsonErrorReturn ( errorMessage );
            return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT).body(errorMess);
        }
    }

    @PostMapping("/rendez-vous/medecin")
    public ResponseEntity<JsonReturn> medecinCreateRendezVous(
            @RequestBody MedecinCreateRendezVous medecinCreateRendezVous,
            @RequestHeader(value = "Authorization", required = true
            ) String authorizationHeader) {

        if (authorizationHeader == null) {
            String errorMessage = "Authentification requise";
            System.out.println(errorMessage);
            JsonErrorReturn errorMess = new JsonErrorReturn ( errorMessage );
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorMess);
        }

        try {
            Optional<Medecin> medecin = medecinService.trouverMedecinParSessionToken(authorizationHeader);
            if (medecin.isEmpty()) {
                String errorMessage = "Authentification requise - Session inconnue";
                System.out.println(errorMessage);
                JsonErrorReturn errorMess = new JsonErrorReturn ( errorMessage );
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorMess);
            }

            rendezvousService.rendezvousCreation(
                    medecinCreateRendezVous.titre(),
                    medecinCreateRendezVous.lieu(),
                    medecinCreateRendezVous.patientId(),
                    medecin.get().getId(),
                    medecinCreateRendezVous.debut(),
                    medecinCreateRendezVous.duree(),
                    medecinCreateRendezVous.notes()
            );

            return ResponseEntity.ok(new JsonSuccess("Rendez-vous créé..."));

        } catch (Exception e) {
            e.printStackTrace();
            String errorMessage = "Élément inexistant, requête invalide, conflit ou erreur interne!!! I'M A TEAPOT!!!";
            System.out.println(errorMessage);
            JsonErrorReturn errorMess = new JsonErrorReturn ( errorMessage );
            return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT).body(errorMess);
        }

    }

    @PatchMapping("/rendez-vous")
    public String bougerRendezVous() {
        return "Hello, World!";
    }

    @PatchMapping("/rendez-vous/rapport")
    public String editerRapportRendezVous() {
        return "Hello, World!";
    }

    @GetMapping("/rendez-vous/rapport")
    public String getRapportRendezVous() {
        return "Hello, World!";
    }

    @DeleteMapping("/rendez-vous")
    public String annulerRendezVous() {
        return "Hello, World!";
    }

    @GetMapping("/rendez-vous")
    public String rechercheRendezVous() {
        return "Hello, World!";
    }

    @GetMapping("/patients")
    public ResponseEntity<JsonReturn> recherchePatients(
                                    @RequestHeader(value = "Authorization", required = true) String authorizationHeader,
                                    @RequestParam(name="numeroAssuranceMaladie", required = false) String numeroAssuranceMaladie,
                                    @RequestParam(name="dateNaissance", required = false) LocalDate dateNaissance,
                                    @RequestParam(name="userId", required = false) UUID userId,
                                    @RequestParam(name="nom", required = false) String nom,
                                    @RequestParam(name="prenom", required = false) String prenom,
                                    @RequestParam(name="telephone", required = false) String telephone
    ) {

        if (authorizationHeader == null) {
            String errorMessage = "Authentification requise";
            System.out.println(errorMessage);
            JsonErrorReturn errorMess = new JsonErrorReturn ( errorMessage );
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorMess);
        }

        Optional<Session> potSession = sessionService.findByToken(authorizationHeader);

        if (potSession.isEmpty()) {
            String errorMessage = "Token Invalide";
            System.out.println(errorMessage);
            JsonErrorReturn errorMess = new JsonErrorReturn ( errorMessage );
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorMess);
        }

        if (PermissionChecker.isPatientAccess(potSession.get().getTypeUser())) { // limiter la recherche des patients seulement à eux même
            userId = potSession.get().getUser().getId();
        }

        List<Patient> resultats = patientService.executePatientSearch(numeroAssuranceMaladie, dateNaissance, userId, nom, prenom, telephone);

        PatientSearchResponse response = new PatientSearchResponse(resultats);


        return ResponseEntity.ok(response);
    }

    @PostMapping("/greenlight")
    public String donnerGreenlight() {
        return "Hello, World!";
    }

    @GetMapping("/greenlight")
    public String getGreenlights() {
        return "Hello, World!";
    }


    @GetMapping("/specialites")
    public ResponseEntity<JsonReturn> getAllSpecialites() {

        try {
            List<Specialite> res = specialiteService.findAllSpecialites();

            SpecialiteSearchResponse response = new SpecialiteSearchResponse(res);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace();
            String errorMessage = "Requête invalide ou erreur interne!!! I'M A TEAPOT!!!";
            System.out.println(errorMessage);
            JsonErrorReturn errorMess = new JsonErrorReturn ( errorMessage );
            return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT).body(errorMess);
        }


    }

    //////////////////////////////////////////////////////////////////
    // Request types
    //////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////
    // Responses types
    //////////////////////////////////////////////////////////////////
    private class MedecinSearchResponse extends JsonReturn {
        private final List<Medecin> medecins;

        public MedecinSearchResponse(List<Medecin> medecins) {
            this.medecins = medecins;
        }

        public List<Medecin> getMedecins() {
            return medecins;
        }
    }

    private class SpecialiteSearchResponse extends JsonReturn {
        private final List<Specialite> specialites;

        public SpecialiteSearchResponse(List<Specialite> specialites) {
            this.specialites = specialites;
        }

        public List<Specialite> getSpecialites() {
            return specialites;
        }
    }

    private class PatientSearchResponse extends JsonReturn {
        private final List<Patient> patients;

        public PatientSearchResponse(List<Patient> patients) {
            this.patients = patients;
        }

        public List<Patient> getPatients() {
            return patients;
        }
    }

    private class HoraireResponse extends JsonReturn {
        private final List<Rendezvous> horaire;

        public HoraireResponse(List<Rendezvous> horaire) {
            this.horaire = horaire;
        }

        public List<Rendezvous> getHoraire() {
            return horaire;
        }
    }

}
