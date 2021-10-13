const client = require("../database");

const PREFIX = process.env.PREFIX;

const discordBot = (message) => {

        //The bot only manage messages starting with PREFIX
        if (!message.content.startsWith(PREFIX) || message.author.bot) return;
          
        //Array of the arguments after the command in the message
        const args = message.content.slice(PREFIX.length).split(/ +/);
        
        //The command following PREFIX in the massage
        const command = args.shift().toLowerCase(); 
        
        function checkUrl(url) {
          return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
        }
        
        //console.log(args);
        if (command === "post") {
            if (args.length !== 2) {
                message.channel.send("Nombre d'arguments fournis invalide. \nUtilisez \`\`\`%post 'immage_url\`\`'");
                return;
            }
            else if (!message.embeds[0]) {
              message.channel.send("L'url envoyé n'est pas valide");
              return;
            }
            else if (!checkUrl(message.embeds[0].url)) {
              message.channel.send("Le format d'image n'est pas supporté par Radamir Bot");
              return;
            }
            else {
              const campaign = client.query(`SELECT * FROM campaign WHERE campaign_name = $1`, [args[1]]);
              if (!campaign) {
                message.channel.send(`Le nom de campagne $1 n'est pas reconnu`, [args[1]]);
                return;
              }
/*               else {

              } */
            }
              console.log(message.embeds[0].url);
        }
};


module.exports = discordBot;
