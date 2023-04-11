const { Telegraf } = require("telegraf");
const TOKEN = "6085759368:AAHLLWHSmCKFGVq5Ik2IhTQ8feaB6h2jY98";
const bot = new Telegraf(TOKEN);

const web_link = "https://cheery-sundae-b80b1b.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome to TgBot)", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
