// PARTIE SERVER //
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const router = require('./app/router');

const app = express();

const port = process.env.PORT || 3333;

app.use(express.json());

app.use(cors({
    'Access-Control-Allow-Origin': '*'
}));

app.use('/v1', router);


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});


// PARTIE SOCKET IO //
const http = require("http");
const socketIo = require("socket.io");
const server = http.createServer(app);
const io = socketIo(server);
const socketPort = process.env.socketPort || 4001;

server.listen(socketPort, () => console.log(`listenning on socketPort ${socketPort}`));

io.on("connection", (socket) => {
    console.log("New client connected");
});  

module.exports = io;


// PARTIE DISCORD //
const {Client, Intents} = require('discord.js');
const token = process.env.TOKEN;

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// When the client is ready, run this code (only once)
client.once('ready', (c) => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
    io.emit("ImgUrl", "https://images.ladepeche.fr/api/v1/images/view/5c191a488fe56f070e4715d0/large/image.jpg");
});  

const discordBot = require('./app/models/discordBot.js');
client.on("messageCreate", (message) => {
    discordBot(message);
});

// Login to Discord with your client's token
client.login(token);