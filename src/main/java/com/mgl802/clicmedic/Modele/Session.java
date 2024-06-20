package com.mgl802.clicmedic.Modele;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;
import java.security.SecureRandom;
import java.util.Base64;

@Entity
@Table(name = "Session")
public class Session {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(name = "Token", length = 255, nullable = false, unique = true)
    private String token;

    @Column(name = "DateCreation", nullable = false)
    private LocalDateTime dateCreation;

    @Column(name = "TypeUser", nullable = false)
    private String typeUser;

    //@Column(name = "DateFin", nullable = false)
    //private LocalDateTime dateFin;

    @ManyToOne
    @JoinColumn(name = "UserID", referencedColumnName = "id", nullable = false)
    private User user;

    // Getters and Setters

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public LocalDateTime getDateCreation() {
        return dateCreation;
    }

    public void setDateCreation(LocalDateTime dateCreation) {
        this.dateCreation = dateCreation;
    }

    /*public LocalDateTime getDateFin() {
        return dateFin;
    }*/

    /*public void setDateFin(LocalDateTime dateFin) {
        this.dateFin = dateFin;
    }*/

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    // Helper method to generate a random token
    private String generateToken() {
        SecureRandom secureRandom = new SecureRandom();
        byte[] tokenBytes = new byte[191]; // 191 bytes of data will result in 255 characters when Base64 encoded
        secureRandom.nextBytes(tokenBytes);
        return Base64.getUrlEncoder().withoutPadding().encodeToString(tokenBytes);
    }

    public String publicGenerateToken() {
        return this.generateToken();
    }

    // JPA lifecycle callback to set the default values
    @PrePersist
    protected void onCreate() {
        dateCreation = LocalDateTime.now();
        if (token == null || token.isEmpty()) {
            token = generateToken();
        }
    }

    public String getTypeUser() {
        return typeUser;
    }

    public void setTypeUser(String typeUser) {
        this.typeUser = typeUser;
    }
}
