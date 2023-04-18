/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ru.nefu.telegrambot;

import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

/**
 *
 * @author lebedkin_ak
 */
public class Bot extends TelegramLongPollingBot {
    private String botUsername = System.getenv("BOT_NAME");
    private String botToken = System.getenv("BOT_TOKEN");

    @Override
    public String getBotToken() {
        return this.botToken;
    }

    @Override
    public void onUpdateReceived(Update update) {
        Long chatId = update.getMessage().getChatId();
        String incomingMessage = update.getMessage().getText().toLowerCase();
        try {
            SendMessage message = new SendMessage();
            message.setChatId(chatId.toString());
            switch (incomingMessage) {
                case ("hi") -> message.setText("hi");
                case ("hello") -> message.setText("hi");
                case ("time") -> message.setText(new Date().toString());
                default -> message.setText("Can't understand");
            }           
            execute(message);
        } catch (TelegramApiException ex) {
            Logger.getLogger(Bot.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @Override
    public String getBotUsername() {
        return this.botUsername;
    }
    
}
