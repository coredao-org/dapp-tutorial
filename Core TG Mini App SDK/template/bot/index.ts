import express from "express";
import { Telegraf } from "telegraf";
import dotenv from "dotenv";

dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN is not set");
}
const bot = new Telegraf(BOT_TOKEN);

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => { });

bot.start((ctx) => {
  ctx.reply("Open the mini app", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Open Mini App",
            web_app: { url: "your-mini-app-url" },
          },
        ],
      ],
    },
  });
});

bot.launch();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
