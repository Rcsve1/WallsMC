const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(` WallsMC .`,'https://www.twitch.tv/WallsMC');
  console.log('_______________________');
  console.log(' WallsMC Is Online Now ')
  console.log('_______________________')
});
client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == '&bc') {
         message.react("✔️")
          let embed = new Discord.RichEmbed()
         
   if(!message.member.hasPermission('MANAGER_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحيه**');
        var msg;
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField('تم الارسال بواسطة :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**● By  :**', `*** → ${message.author.username}#${message.author.discriminator}***`)
            .addField('***● From Server  :***', `*** → ${message.guild.name}***`)               
    .setColor('#ff0000')
                 .addField('ّ', args)
            m.send(``,{embed: bc});
        });
    }
})
client.login("NDcwMjk3MjQwMzgwODk5MzI4.DjUOBQ.SOuwksme6bkyDxZruOkZl5Lce8A");
