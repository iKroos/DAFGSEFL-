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




client.on('messageCreate', async(message) => {
  let prefix = 'k';
  let args = message.cleanContent.split(' ');
  if (args[0] == `${prefix}ping`) {
    let time = Date.now();
    let msg = await message.channel.createMessage('pong');
    msg.edit(`\`\`\`javascript\nTime taken: ${Date.now() - time} ms\nDiscord API: ${Math.floor(message.guild.shard.latency)} ms\`\`\``);
  }
});







client.login(process.env.BOT_TOKEN);
