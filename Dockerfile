# Utiliser une image légère d'OpenJDK
FROM openjdk:18-jdk-slim

# Créer un volume temporaire pour les fichiers temporaires
VOLUME /tmp

# Copier l'application dans l'image
COPY target/clicmedic-api-0.0.1-SNAPSHOT.jar /app/clicmedic-api.jar

# Définir le point d'entrée pour démarrer l'application
ENTRYPOINT ["java", "-jar", "/app/clicmedic-api.jar"]
