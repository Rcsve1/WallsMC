const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '/'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("●╠ 609 ╢ Member", "●╠ 609 ╢ Member");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})


client.login('NDkxMjYyMjk0MDEwMTAxNzYy.DoFTag.Ag6KU_rUA_BVyFFFRVE5Rhq8zd4');
