# SimpleChatTranslatorBot
I can't figure out a neat name. Help me.

# How to install

Firstly you must have NodeJS and TypeScript installed. Then, using [@BotFather](https://t.me/BotFather) via Telegram, you will obtain a bot token that you'll need later.

Create a new directory called `dist`:
```bash
mkdir dist
```
Once you've created it you have to install the needed dependencies with:
```bash
npm install
```
Then you'll have to compile the project using:
```bash
npm run compile
```


Once you compiled it successfully you have still to set the environment variables which can be done with the command or by creating a `.env` file into the `dist` folder, the properties that must be set are `BOT_TOKEN` that is the token obtained from BotFather, and `DEEPL_API_KEY` which is the api key that you have to get [here](https://www.deepl.com/pro#developer).

 
You can then run the bot by simply doing:
```bash
npm run start
```
Or
```bash
cd dist
node bot.js
```
