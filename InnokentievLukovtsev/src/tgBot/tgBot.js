const telegramBot = require('node-telegram-bot-api')
const config = require('./config.json')

const token = config.TOKEN
const bot = new telegramBot(token, { polling: true })

bot.on('message', msg => {
    const {chat: {id}} = msg
    bot.sendMessage(id,'Pong')
})