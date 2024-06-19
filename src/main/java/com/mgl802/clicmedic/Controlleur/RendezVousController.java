package com.mgl802.clicmedic.Controlleur;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/clicmedic")
public class RendezVousController {

    @GetMapping("/medecin")
    public String rechercheMedecin() {
        return "Hello, World!";
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
}
