const { Telegraf } = require("telegraf");

const token = "1467431448:AAGUFudPK0ZVpMfKd4KeADt6us-Tsn8YLmA";

module.exports = {
  usingTelegramBot: (newListing) => {
    console.log("telegram!");
    const bot = new Telegraf(token);
    bot.start((ctx) => ctx.reply(`Welcome bitch , ${newListing}`));
    bot.help((ctx) => ctx.reply("Send me a sticker"));
    bot.on("sticker", (ctx) => ctx.reply("👍"));
    bot.hears("hi", (ctx) => ctx.reply("Hey there"));
    bot.launch();
  },
};
