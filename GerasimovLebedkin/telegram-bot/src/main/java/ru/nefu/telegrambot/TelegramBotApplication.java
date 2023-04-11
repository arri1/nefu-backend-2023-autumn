package ru.nefu.telegrambot;

import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.telegram.telegrambots.meta.TelegramBotsApi;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;
import org.telegram.telegrambots.updatesreceivers.DefaultBotSession;

@SpringBootApplication
public class TelegramBotApplication {

	public static void main(String[] args) {
            try {
                SpringApplication.run(TelegramBotApplication.class, args);
                TelegramBotsApi botsApi = new TelegramBotsApi(DefaultBotSession.class);
                botsApi.registerBot(new Bot());
            } catch (TelegramApiException ex) {
                Logger.getLogger(TelegramBotApplication.class.getName()).log(Level.SEVERE, null, ex);
            }
	}

}
