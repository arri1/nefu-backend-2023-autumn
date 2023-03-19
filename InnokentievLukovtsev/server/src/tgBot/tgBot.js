const telegramBot = require('node-telegram-bot-api')
const config = require('./config.json')
const {createContext} = require("../context");

const token = config.TOKEN
const bot = new telegramBot(token, { polling: true })

bot.onText(/\/r (.+)/, async (msg, match) => {
    let context = createContext()
    const chatId = msg.chat.id;
    const response = match[1];
    let cec = await context.prisma.User.findUnique({
        where: {
            id: Number(response)
        }
    });
    const otv = "id: " + cec.id + "\nname: " + cec.name + "\nemail:" + cec.email;
    bot.sendMessage(chatId,otv);
    console.log(cec)
});


