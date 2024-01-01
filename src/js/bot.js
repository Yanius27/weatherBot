const { Telegraf } = require('telegraf');
const axios = require('axios');

const bot = new Telegraf('6906916954:AAH_aFejEIAAUI2jpBMuvp5GZpoBZUHRr2A');
bot.start((ctx) => ctx.reply('Welcome'));
bot.on('message', async (ctx) => {
  if (ctx.message.location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${ctx.message.location.latitude}&lon=${ctx.message.location.longitude}&units=metric&appid=2e28e3f88f4b45d38dcb6268507758b3`;
    const response = await axios.get(url);
    ctx.reply(`Krasnoyarsk: ${response.data.main.temp} C`);
  }
});
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));