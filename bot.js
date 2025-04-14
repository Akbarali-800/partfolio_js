// Telegraf kutubxonasini chaqiramiz
const { Telegraf } = require('telegraf');

// Bu yerga o'z bot tokeningizni yozing (BotFather dan olingan)
const bot = new Telegraf('7047181141:AAHeRkQbfwkjasqhwXIG7XtPpLeeJm_9mVA'); // <-- shu yerga tokenni qo‘ying

// /start komandasi uchun javob
bot.start((ctx) => {
  ctx.reply("Salom! Bu yerda men qilgan web sahifalarni ko'rishingiz mumkin:", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "🖥 Portfolio Sahifa 1", url: "https://akbarali-800.github.io/RentcarRR/" }],
        [{ text: "🖥 Portfolio Sahifa 1", url: "https://akbarali-800.github.io/online_shop/" }],
        [{ text: "🛍 Portfolio Sahifa 2", url: "https://akbarali-800.github.io/Dashboard_/" }],
        [{ text: "🎨 Portfolio Sahifa 3", url: "https://akbarali-800.github.io/car_rent/" }],
      ]
    }
  });
});

// Har qanday boshqa xabar uchun oddiy javob
bot.on('message', (ctx) => {
  ctx.reply("Iltimos, /start buyrug'ini yuboring yoki menyudagi tugmalardan foydalaning.");
});

// Botni ishga tushuramiz
bot.launch();

console.log('✅ Bot ishga tushdi...');
