const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '/'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', message => {
 if (message.author.id === client.user.id) return;
  if (message.guild) {
 let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
  if (!args[1]) {
message.channel.send("``bc <message>``");
return;
}
      message.guild.members.forEach(m => {
 if(!message.member.hasPermission('ADMINISTRATOR')) return;
          var bc = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .addField('»الـمرسل«', `${message.author.username}!${message.author.discriminator}`,true)
          .addField('»الـسيرفر«', `${message.guild.name}`,true)
          .addField('»الرسالة«', args)
          .setThumbnail(message.guild.iconURL)
          .setColor('RANDOM')
          m.send(`${m}`,{embed: bc});
      });
      const Nawaf = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle('✅| جاري ارسال رسالتك ')
      .addBlankField(true)
      .addField('♨| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)
      .addField('📝| الرسالة ', args)
      .setColor('RANDOM')
      message.channel.sendEmbed(embed);
  }
  } else {
      return;
  }
});







client.login('NDkxMjYyMjk0MDEwMTAxNzYy.DoFTag.Ag6KU_rUA_BVyFFFRVE5Rhq8zd4');
