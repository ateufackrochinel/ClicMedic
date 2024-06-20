    package com.mgl802.clicmedic.Modele;

    import jakarta.persistence.*;
    import java.time.LocalDate;
    import java.util.UUID;

    @Entity
    @Table(name = "Patients")
    public class Patient {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private UUID id;

        @Column(name = "NumeroAssuranceMaladie", length = 100)
        private String numeroAssuranceMaladie;

        @Column(name = "DateNaissance")
        private LocalDate dateNaissance;

        @OneToOne(cascade = CascadeType.ALL)
        @JoinColumn(name = "UserID", referencedColumnName = "id")
        private User user;

        public Patient() {
        }
        public Patient(String numeroAssuranceMaladie, LocalDate dateNaissance, User user) {
            this.numeroAssuranceMaladie = numeroAssuranceMaladie;
            this.dateNaissance = dateNaissance;
            this.user = user;
        }

        // Getters and Setters

        public UUID getId() {
            return id;
        }

        public void setId(UUID id) {
            this.id = id;
        }

        public String getNumeroAssuranceMaladie() {
            return numeroAssuranceMaladie;
        }

        public void setNumeroAssuranceMaladie(String numeroAssuranceMaladie) {
            this.numeroAssuranceMaladie = numeroAssuranceMaladie;
        }

        public LocalDate getDateNaissance() {
            return dateNaissance;
        }

        public void setDateNaissance(LocalDate dateNaissance) {
            this.dateNaissance = dateNaissance;
        }

        public User getUser() {
            return user;
        }
    }
