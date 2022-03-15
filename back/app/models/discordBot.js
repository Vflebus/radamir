const io = require('../../index.js');

const discordBot = (message) => {
  if (message.content.startsWith('http') && (message.content.endsWith('jpeg') || message.content.endsWith('jpg') || message.content.endsWith('gif') || message.content.endsWith('png'))) {
    // Le message commence par http et finit par une extension d'image, c'est très probablement un lien d'image ! On récupère le contenu du message dans message.content
    console.log(`Il correspond ! ${message.content}`);
    io.emit("ImgUrl", message.content);
  }
  else if (message.attachments.first()){
    if (message.attachments.first().url){
      //attachments est une collection contenant les documents ajoutés au message. Une collection est une classe discord.js basée sur Map. Sa méthode first() renvoie le premier élément de la collection : un object avec une prop url
      console.log(`found message.attachments.first().url: ${message.attachments.first().url}`);
      io.emit("ImgUrl", `${message.attachments.first().url}`)
    } 
    else {
      console.log(`ça ne me concerne pas`);
    }
  } 
  else {
    console.log(`ça ne me concerne pas`);
  }
};

module.exports = discordBot;
