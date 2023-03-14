import TelegramBot from 'node-telegram-bot-api'
import config from 'config'

const token = config.get('TOKEN')
const bot = new TelegramBot(token, { polling: true })

bot.on('message', msg => {
    const {chat: {id}} = msg
    bot.sendMessage(id,'Pong')
})