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
  if (args[0] == `${prefix}setnick`) {
    if (!message.member.hasPermission('manageNicknames')) return;
    let member = message.channel.guild.members.get(message.mentions[0] ? message.mentions[0].id : args[1]);
    if (!member) return message.channel.createMessage(`:rolling_eyes: - **I can't find this member**`);
    try {
      let nickname = message.content.split(' ').slice(2).join(' ') || '';
      await member.edit({
        nick: nickname
      });
      let reply = nickname == '' ? `:white_check_mark: **${member.username}**'s nick has been reset.` : `:white_check_mark: **${member.username}**'s nick has been changed to \`${nickname}\`!`;
      await message.channel.createMessage(reply);
    } catch (e) {
      await message.channel.createMessage(`:rolling_eyes: - I couldn't update that user. Please check my permissions and role position.`);
    }
  }
});







client.login(process.env.BOT_TOKEN);
