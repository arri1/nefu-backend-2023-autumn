const TelegramBot = require('node-telegram-bot-api');
import { createContextForTgBot } from "./context";

export class TgBot {
    constructor() {
        const token = process.env.TELEGRAM_BOT_TOKEN;
        const bot = new TelegramBot(token, { polling: true });

        bot.onText(/\/echo (.+)/, (msg, match) => {
            const chatId = msg.chat.id;
            const response = match[1];
            bot.sendMessage(chatId, response);
        });

        bot.onText(/\/hello/, (msg) => {
            const chatId = msg.chat.id;
            const response = "Приветствую, " + msg.from.first_name;
            bot.sendMessage(chatId, response);
        });

        bot.onText(/\/time/, (msg) => {
            const chatId = msg.chat.id;
            const today = new Date(Date.now()).toLocaleString('ru-RU');
            const response = "Текущее время: " + today;
            bot.sendMessage(chatId, response);
        });

        bot.onText(/\/stats/, async (msg) => {
            const chatId = msg.chat.id;
            const context = await createContextForTgBot();
            const userCount = await context.prisma.user.count();
            const postsCount = await context.prisma.post.count();
            const response = "Количество пользователей: " + userCount + "\nКоличество постов: " + postsCount;
            bot.sendMessage(chatId, response)
        });

        bot.on('message', (msg) => {
            const chatId = msg.chat.id
            if (msg.text.toLowerCase() == 'привет') {
                const response = "Здравствуй, " + msg.from.first_name;
                bot.sendMessage(chatId, response)
            }
        })
    }
}
