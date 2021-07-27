//ee
require('dotenv').config()
//import discord
const Discord = require('discord.js');
const client = new Discord.Client();
//start bot functions
client.on("ready", () => {
console.log("Bot Is Ready")
//bro
client.user.setActivity("Watching Gamers Server", {type: "PLAYING"});
})
//message pog
client.on("message",msg =>{
 if(msg.content === "Pog")
 msg.channel.send("Very pog")
 //afk functions
 else if (msg.content ===   "Joseph Afk Me" ) {
  msg.channel.send("Ok I Afk You")
  // msg.member.roles.add('869211245235044413') 
   grantRole(msg.member.roles);
}
})
const grantRole = i => { 
 i.add('869211245235044413')

}

//get yt
client.on("message",msg =>{
  if(msg.content === "!Get Yt") {
  msg.channel.send("Dont Forget To Subscribe (Btw We Will Add The Design  Very Soon Big Update) https://www.youtube.com/channel/UCfteCJCC4im_TEZsQ9_TlDA  ")
}
});
//Pls Give Me Server Link
client.on("message",msg =>{
  if(msg.content === "!Get Smp Server") {
  msg.channel.send(" Server Ip: JosephPlays.aternos.me Server Port: 31095      (Btw We Will Add The Design  Very Soon Big Update) ")
}
});

//end
//bot token
client.login('ODY4MTE1MjIzMDk2MjA5NDU5.YPq9TQ.lWocEeJH_gEZd10UTcplJ22Vp90')

//