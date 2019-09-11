const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "k";
var adminprefix = 'k'

const developers = ["527825056860995594","514876883951943733"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});




client.on("message", message => {
if(message.content.startsWith(prefix + "avatar")){
if(message.author.bot || message.channel.type == "dm") return;
var args = message.content.split(" ")[1];
var avt = args || message.author.id;
client.fetchUser(avt)
.then((user) => {
avt = user
let avtEmbed = new Discord.RichEmbed()
.setColor("#36393e")
.setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL)
.setImage(avt.avatarURL)
.setFooter(`PrimeBot.`, message.client.user.avatarURL);
message.channel.send(avtEmbed);
})
.catch(() => message.channel.send(`Error`));
} 
}); 






client.login(process.env.BOT_TOKEN);
