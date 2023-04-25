FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
COPY backend/target/*.jar backend.jar
ENTRYPOINT ["java","-jar","/backend.jar"]