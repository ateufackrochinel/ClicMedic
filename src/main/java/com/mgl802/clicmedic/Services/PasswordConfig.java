package com.mgl802.clicmedic.Services;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PasswordConfig {

    // Const salt value
    private static final String SALT = "biais de mot de passe ";

    // BCrypt password encoder
    private static final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    /**
     * Hash a password with a constant salt value.
     * @param password The password to hash.
     * @return The hashed password.
     */
    public static String hashPassword(String password) {
        // Combine the password with the salt
        String saltedPassword = password + SALT;
        return passwordEncoder.encode(saltedPassword);
    }

    /**
     * Compare a raw password with a hashed password.
     * @param rawPassword The raw password.
     * @param hashedPassword The hashed password.
     * @return True if the passwords match, false otherwise.
     */
    public static boolean comparePasswords(String rawPassword, String hashedPassword) {
        // Combine the raw password with the salt
        String saltedPassword = rawPassword + SALT;
        return passwordEncoder.matches(saltedPassword, hashedPassword);
    }
}
