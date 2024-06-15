package com.mgl802.clicmedic.Modele;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "Admins")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(name = "AdminId", length = 100, nullable = false)
    private String adminId;

    @OneToOne
    @JoinColumn(name = "UserID", referencedColumnName = "id", nullable = false)
    private User user;

    // Getters and Setters

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getAdminId() {
        return adminId;
    }

    public void setAdminId(String adminId) {
        this.adminId = adminId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
