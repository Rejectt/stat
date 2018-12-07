const Discord = require("discord.js")
const client = new Discord.Client()
const adminprefix = "m-";
const developers = ["520642610575048734","520642610575048734"]
const prefix = "m-";
client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log('By Unknown')
  console.log('')  
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});


client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'sp')) {
    client.user.setGame(argresult);
      message.channel.send(`**Done You Have Been Changed The Playing To ${argresult}**✅ `)
  } else  
  if (message.content.startsWith(adminprefix + 'sw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Done You Have Been Changed The Watching To ${argresult}**✅`)
  } else 
  if (message.content.startsWith(adminprefix + 'sl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Done You Have Been Changed The Listening To ${argresult}**✅`)
  } else 
  if (message.content.startsWith(adminprefix + 'ss')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**Done You Have Been Changed The Streaming To ${argresult}**✅`)
  }
  if (message.content.startsWith(adminprefix + 'sn')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**Changing The Name To ..${argresult}** ✅`)
} else
if (message.content.startsWith(adminprefix + 'sa')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**Changing The Avatar To :${argresult}** ✅`);
}


});


client.login(process.env.BOT_TOKEN);
