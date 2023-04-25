FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
COPY telegram-bot/target/*.jar telegram-bot.jar
ENTRYPOINT ["java","-jar","/telegram-bot.jar"]