FROM openjdk:18-jdk-slim
VOLUME /tmp
COPY target/clic-medic-spring-boot.jar clic-medic-app.jar
ENTRYPOINT ["java", "-jar", "/clic-medic-app.jar"]
