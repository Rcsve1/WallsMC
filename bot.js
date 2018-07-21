const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "&";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`RCSVE`);
        console.log(`----------------`);
      console.log(`Play.WallsMC.Net{client.guilds.size}`);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Play.WallsMC.Net`,"http://twitch.tv/WallsMC")
client.user.setStatus("dnd")
});



client.login("NDcwMjk3MjQwMzgwODk5MzI4.DjUOBQ.SOuwksme6bkyDxZruOkZl5Lce8A");
