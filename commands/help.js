const {MessageEmbed} = require('discord.js')
var prefix = '!'

module.exports = {
  name: "help",
  description: "Help command",
  execute(message, client) {
    var helpEmbed = new MessageEmbed()
      .setTitle("Lyric funbot HelpList")
      .setThumbnail('https://cdn.discordapp.com/avatars/794563301577195541/de7d1c8b363ff7022dc88d7ca834f68d.png?size=1024')
      .setDescription(`
      **Commands** :
\`${prefix}iq\` : **iq game**
\`${prefix}love\` : **love game**
\`${prefix}gay\` : **gay game**
\`${prefix}hug\` : **hug game**
\`${prefix}hate\` : **hate game**
\`${prefix}kill\` : **kill game**
\`${prefix}memes\` : **memes**
      `)
      .setColor('RANDOM')
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp();
     message.channel.send(helpEmbed);
  },
};
