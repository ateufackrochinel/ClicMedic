package com.mgl802.clicmedic.Controlleur;

import com.mgl802.clicmedic.Controlleur.jsontypes.JsonReturn;
import com.mgl802.clicmedic.Modele.Medecin;
import com.mgl802.clicmedic.Services.AuthenticationService;
import com.mgl802.clicmedic.Services.MedecinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/clicmedic")
public class RendezVousController {

    private final MedecinService medecinService;

    @Autowired
    public RendezVousController(MedecinService medecinService) {
        this.medecinService = medecinService;
    }

    @GetMapping("/medecin")
    public ResponseEntity<JsonReturn> rechercheMedecin(
            @RequestParam(name="specialiteId", required = false) UUID specialiteId,
            @RequestParam(name="userId", required = false) UUID userId,
            @RequestParam(name="numeroEmploye", required = false) String numeroEmploye,
            @RequestParam(name="telephoneBureau", required = false) String telephoneBureau,
            @RequestParam(name="lieuTravail", required = false) String lieuTravail
    ) {

        List<Medecin> resultats = medecinService.executeMedecinSearch(specialiteId, userId, numeroEmploye, telephoneBureau, lieuTravail);

        MedecinSearchResponse response = new MedecinSearchResponse(resultats);


        return ResponseEntity.ok(response);
    }

    @GetMapping("/medecin/horaire")
    public String getHoraireMedecin() {
        return "Hello, World!";
    }

    @PostMapping("/rendez-vous")
    public String createRendezVous() {
        return "Hello, World!";
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
    public String recherche() {
        return "Hello, World!";
    }

    @PostMapping("/greenlight")
    public String donnerGreenlight() {
        return "Hello, World!";
    }



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
}
