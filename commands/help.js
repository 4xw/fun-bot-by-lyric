const {MessageEmbed} = require('discord.js')
var prefix = '!'

module.exports = {
  name: "help",
  description: "Help command",
  execute(message, client) {
    var helpEmbed = new MessageEmbed()
      .setTitle("Lyric funbot HelpList")
      .setThumbnail(client.user.displayAvatarUrl())
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
