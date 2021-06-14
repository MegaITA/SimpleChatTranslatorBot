import { Bot } from 'grammy'
import * as dotenv from 'dotenv';
import translate = require('deepl');

// load env variables from .env file
dotenv.config();

const bot = new Bot(process.env.BOT_TOKEN!);


bot.command(['translate', 'trn'], async (ctx) => {
    
    let me = await bot.api.getMe();

    if(ctx.message?.reply_to_message?.from?.id == me.id)
        return ctx.reply('You cannot translate this bot\'s messages.');

    if(!ctx.message?.reply_to_message)
        return ctx.reply('You must run the command as a reply to a message!');
    
    let lang = ctx.message?.text.split(' ')[1].toUpperCase();

    if(!lang)
        return ctx.reply('You must specify a language! Example: /translate en');

    let result = await translate({
        text: ctx.message.reply_to_message.text!,
        free_api: true,
        auth_key: process.env.DEEPL_API_KEY!,
        target_lang: lang as ''
    });

    ctx.reply(`Translating from ${result.data.translations[0].detected_source_language}:\n\n${result.data.translations[0].text}`)

});

bot.start();