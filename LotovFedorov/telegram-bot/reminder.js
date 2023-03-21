const TelegramBot = require('node-telegram-bot-api');
const sqlite = require('sqlite-sync');

var token = '6103861628:AAEg-a9fnG6x474Om3byezLWeGqfK3CM87Q';
var bot = new TelegramBot(token, {polling: true});

sqlite.connect('../prisma/dev.db'); 

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет, Друг!');
  });