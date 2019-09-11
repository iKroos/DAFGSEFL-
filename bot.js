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

client.on('message', zaid => {
    if (zaid.content === ('kbot')) {
        const bot = new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor("#36393e")
            .addField('✽ **Bot Ping** :' , `» ${Date.now() - zaid.createdTimestamp}` + ' ms', true)
            .addField('✽ **Servers** :', `» ${client.guilds.size}`, true)
            .addField('✽ **Channels** :' , `» ${client.channels.size} ` , true)
            .addField('✽ **Users** :' ,`» ${client.users.size} ` , true)
            .addField('✽ **Bot Name** :' , `» ${client.user.tag} ` , true)
            .addField('✽ **Bot Owner** :' , `» <@527825056860995594>` , true) 
            .setFooter(zaid.author.username, zaid.author.avatarURL)
            zaid.channel.send(bot)
    })
}
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === "pnew") {
       let em  = client.guilds.get("620707631216197633").emojis.find(r => r.name === "1_");
       let em2  = client.guilds.get("620707631216197633").emojis.find(r => r.name === "2_");
       let em3  = client.guilds.get("620707631216197633").emojis.find(r => r.name === "3_");
       let em4  = client.guilds.get("620707631216197633").emojis.find(r => r.name === "4_");

     message.channel.send(`**${em} حلاوة**`);

    }
});




client.login(process.env.BOT_TOKEN);
