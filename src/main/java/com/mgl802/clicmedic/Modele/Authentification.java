package com.mgl802.clicmedic.Modele;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "Authentification")
public class Authentification {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @OneToOne
    @JoinColumn(name = "UserID", referencedColumnName = "id")
    private User user;

    @Column(name = "PasswordHash", length = 255, nullable = false)
    private String passwordHash;

    public Authentification() {
    }
    public Authentification(User user, String passwordHash) {
        this.user = user;
        this.passwordHash = passwordHash;
    }


    // Getters and Setters

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

}
