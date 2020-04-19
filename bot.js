const Telegraf = require ('telegraf');

const bot = new Telegraf('token was here !')

bot.start((ctx) => {
    console.log(ctx.from)
    console.log(ctx.chat)
    console.log(ctx.message)
    console.log(ctx.updateSubTypes)
    ctx.reply(`Welcome to my bot ${ctx.from.first_name} ${ctx.from.last_name}` );
    ctx.reply(`How can I help you, your send me a message ${ctx.updateSubTypes[0]}` );
})

bot.help((ctx) => {
    ctx.reply('Help me please!');
})


bot.settings((ctx) => {
    ctx.reply('Settings');
})

bot.command(['mycommand', 'MyCommand', 'MYCOMMAND', 'test'], (ctx)=>{
    ctx.reply('que pedo carnal soy un bot 👍');
})

bot.hears('Hello', (ctx) => {
    ctx.reply('Hey, How can I help you?');
})

// bot.on('text',(ctx) => {
//     ctx.reply('Hey, are you texting?'); 
// })

bot.on('sticker',(ctx) => {
    ctx.reply('Oh, do you like sticker?'); 
})

bot.mention('BotFather',(ctx) => {
   ctx.reply(`You mentioned someone ?`);
})

bot.phone('+1 730 263-4233', ctx =>{
   ctx.reply('this a number phone');
})

bot.hashtag('programming', ctx =>{
    ctx.reply('this a hashtag');
 })

bot.launch()