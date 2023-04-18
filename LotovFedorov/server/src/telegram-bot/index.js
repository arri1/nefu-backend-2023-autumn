const TelegramApi = require("node-telegram-bot-api");
const { createContext } = require("../context");
const confing = require("./config.json");

const token = confing.token;

const bot = new TelegramApi(token, { polling: true });

bot.on("message", async (msg) => {
	const text = msg.text;
	const chatId = msg.chat.id;
	const user = msg.first_name;
	if (text === "/start") {
		await bot.sendSticker(
			chatId,
			"https://cdn.tlgrm.app/stickers/2ff/69a/2ff69ac2-b557-41d1-8b15-4cd27230b8c8/96/1.webp"
		);
		await bot.sendMessage(chatId, `Добро пожаловать на наш бот, чтобы узнать команды напиши /help`);
	}

	if (text === "/info") {
		await bot.sendMessage(
			chatId,
			`Меня разработали Лотов и Федоров из группы М-ИВТ-21`
		);
	}

	if (text === "/help") {
		await bot.sendMessage(
			chatId,
			"Есть команды: /info, /help, /reg, /findAllUsers"
		);
	}

	if (text === "/findAllUsers") {
		let context = createContext();
		const chatId = msg.chat.id;
		let res = await context.prisma.User.findMany();
		console.log(res);
		await bot.sendMessage(chatId, "Почты пользователей");
		for (i = 0; i < Object.keys(res).length; i++) {
			if (res[i].email != "") {
				await bot.sendMessage(chatId, res[i].email);
			}
		}
	}
});

bot.onText(/\/reg (.+)/, async (msg, match) => {
	
	let context = createContext();
	const chatId = msg.chat.id;
	const response = match[0].split(" ");
	const name = response[1];
	const email = response[2];
	const pass = response[3];
	let res = await context.prisma.User.create({
		data: {
			name: name,
			email: email,
			password: pass,
		},
	});
	await bot.sendMessage(chatId, "Пользователь " + name + " создан");
});
