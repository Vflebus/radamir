const io = require('../../index.js');

const discordBot = (message) => {
  if (message.content.startsWith('http') && (message.content.endsWith('jpeg') || message.content.endsWith('jpg') || message.content.endsWith('gif') || message.content.endsWith('png'))) {
    console.log(`Il correspond ! ${message.content}`);
    io.emit("ImgUrl", message.content);
  }
  else if (message.embeds[0]) {
    console.log('message.embeds[0] found');
    if (message.author.bot) return;
      
    //Array of the arguments after the command in the message
    const args = message.content.split(/ +/);
    console.log(message.content);
    
    console.log(`args[0]: ${args[0]}`);

    io.emit("ImgUrl", `${args[0]}`);
  }
  else if (message.attachments.first([1]).length > 0){
    console.log(`message.attachments.first([1])[0].url: ${message.attachments.first([1])[0].url}`);
    io.emit("ImgUrl", `${message.attachments.first([1])[0].url}`)
    console.log(`message: ${message}`);
    //! demandes au front de poster une nouvelle image in real time dans la page campagne
  } 
  else {
    console.log('ça ne me concerne pas');
    console.log(`ce qui ne me concerne pas : ${message.content}`);
    console.log(`message: ${message}`);
  }
};

//Ligne pour trouver l'url de l'image(file) postée sur le canal
//console.log(message.attachments.first([1])[0].url);

// ligne pour trouver l'url de l'image(URL) postée sur le discord
//console.log(message.embeds[0].url);

module.exports = discordBot;
