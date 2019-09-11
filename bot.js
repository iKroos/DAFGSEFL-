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
  if (args[0] == `${prefix}clear`) {
    let botM = message.channel.guild.members.get(client.user.id);
    if (!message.member.hasPermission('manageMessages') || !botM.hasPermission('manageMessages')) return;
    let limit = !args[1] || isNaN(args[1]) || args[1] > 100 ? 100 : parseInt(args[1]);
    let msgs = await message.channel.purge(limit != 100 ? limit + 1 : limit);
    let msg = await message.channel.createMessage(`\`\`\`javascript\n${msgs != 100 ? msgs - 1 : msgs} message${msgs - 1 == 1 ? ' has' : 's have'} been deleted.\`\`\``);
    setTimeout(() => {
      msg.delete();
    }, 2000);
  }
});





client.login(process.env.BOT_TOKEN);
