const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`609`,'https://www.twitch.tv/609');
  console.log('---------------');
  console.log(' 609 !')
  console.log('---------------')
});

const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "??welcome");
    logChannel.send(`Invited by: <@${inviter.tag}>`);
  });
});
client.login("NDkxMjYyMjk0MDEwMTAxNzYy.DtmnOw.BwWIfRS5NrangxJM4vp1rIWeWGc");
