const telegramBot = require('node-telegram-bot-api')
const config = require('./config.json')
const {createContext} = require("../context");

const token = config.TOKEN
const bot = new telegramBot(token, { polling: true })

bot.onText(/\/g (.+)/, async (msg, match) => {
    let context = createContext()
    const chatId = msg.chat.id;
    const response = match[1];
    let res = await context.prisma.User.findUnique({
        where: {
            id: Number(response)
        }
    });
    const otv = "id: " + res.id + "\nname: " + res.name + "\nemail: " + res.email;
    bot.sendMessage(chatId,otv);
});

bot.onText(/\/r (.+)/, async (msg, match) => {
    let context = createContext()
    const chatId = msg.chat.id;
    const response = match[0].split(' ')
    const name = response[1];
    const email = response[2];
    const pass = response[3];
    let res = await context.prisma.User.create({
        data: {
            name: name,
            email: email,
            password: pass
        }
    });
    bot.sendMessage(chatId,"user " + name + " created");
    }
)


