const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '/'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('●╠ 609 ╢ Member'));
});

client.login('NDkxMjYyMjk0MDEwMTAxNzYy.DoFTag.Ag6KU_rUA_BVyFFFRVE5Rhq8zd4');
