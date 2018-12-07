const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "d";
var adminprefix = '.'
const developers = ["520640850401820682"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`:white_check_mark: Changing The Playing Mode To **${argresult}** :white_check_mark:  `)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`:white_check_mark: Successfully Changing The Watching Mode To **${argresult}** :white_check_mark: `)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`:white_check_mark: Successfully Changing The Listening Mode To **${argresult}** :white_check_mark: `)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/One");
      message.channel.send(`:white_check_mark: Successfully Changing The Streaming Mode To **${argresult}** :white_check_mark: `)
  }
  if (message.content.startsWith(adminprefix + 'setn')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'seta')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});



client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
