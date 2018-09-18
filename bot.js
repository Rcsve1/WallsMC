const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '/'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
    member.guild.member(member.user).addRole(member.guild.roles.find(r => r.name === '●╠ 609 ╢ Member'));
});

         client.on('message', message => {
            if (message.content.startsWith(prefix + "info")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
.addField(' الاعضاء👥 ',` [${client.users.size}] `)
.addField('الرومات📚 ',`[${client.channels.size}]`) 
.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
  message.channel.sendEmbed(embed);
    }
});







client.login('NDkxMjYyMjk0MDEwMTAxNzYy.DoKVbA.6zwfJBjYVv94gm-9CM0INC4p_Sg');
