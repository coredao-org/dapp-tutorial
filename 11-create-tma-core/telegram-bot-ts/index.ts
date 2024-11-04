import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN;
const WEBAPP_URL = process.env.WEBAPP_URL;

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN is not set in the environment variables");
}

if (!WEBAPP_URL) {
  throw new Error("WEBAPP_URL is not set in the environment variables");
}

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const keyboard = {
    inline_keyboard: [
      [{ text: "Open Mini App", web_app: { url: WEBAPP_URL } }],
    ],
  };

  bot.sendMessage(
    chatId,
    "Welcome! Click the button below to open the Mini App.",
    {
      reply_markup: keyboard,
    },
  );
});

bot.on("message", (msg) => {
  if (msg.web_app_data) {
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId,
      `Received data from Web App: ${msg.web_app_data.data}`,
    );
  }
});

console.log("Bot is running...");
