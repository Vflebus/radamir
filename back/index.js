require('dotenv').config();
const cors = require('cors');
const express = require('express');
const router = require('./app/router');

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const discordBot = require('./app/models/discordBot.js');

const app = express();

const port = process.env.PORT || 3333;
const token = process.env.TOKEN;

app.use(express.json());

app.use(cors({
    'Access-Control-Allow-Origin': '*'
}));

app.use('/v1', router);


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

client.on("ready", () => {
    console.log(`Bot logged in as ${client.user.tag}!`);
});
  
client.on("messageCreate", (message) => {
    discordBot(message);
});
  
  client.login(token);