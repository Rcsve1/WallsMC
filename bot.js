const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '/'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
    member.guild.member(member.user).addRole(member.guild.roles.find(r => r.name === '●╠ 609 ╢ Member'));
});







client.login('NDkxMjYyMjk0MDEwMTAxNzYy.DoKVbA.6zwfJBjYVv94gm-9CM0INC4p_Sg');
