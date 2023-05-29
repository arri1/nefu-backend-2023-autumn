const TelegramBot = require('node-telegram-bot-api');
const token = '5911895750:AAEm3g6zLwNpp6sELbVf-SjESNdENp4gpxA';

const bot = new TelegramBot(token, { polling: true });

const userData = {
  phoneNumber: '',
  email: '',
};

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет! Приступим к регистрации!\n\nВведите ваш номер телефона:');
});

bot.on('text', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (!userData.phoneNumber) {
    if (text.length === 11 && /^\d+$/.test(text)) {
      userData.phoneNumber = text;
      bot.sendMessage(chatId, 'Ваш номер успешно сохранен! Теперь введите вашу почту:');
    } else {
      bot.sendMessage(chatId, 'Неправильный формат номера. Длина номера должна составлять 11 символов. Пожалуйста, введите номер телефона:');
    }
  } else if (!userData.email) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
      userData.email = text;
      bot.sendMessage(chatId, `Ваш номер: ${userData.phoneNumber} и почта ${userData.email} успешно сохранены!`);
    } else {
      bot.sendMessage(chatId, 'Неправильный формат почты. Пожалуйста, введите вашу почту в формате example@exmpl.com:');
    }
  }
});



