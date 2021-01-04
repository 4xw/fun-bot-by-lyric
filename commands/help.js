const {MessageEmbed} = require('discord.js')
var prefix = '!'

module.exports = {
  name: "help",
  description: "Help command",
  execute(message, client) {
    var helpEmbed = new MessageEmbed()
      .setTitle("Unex HelpList")
      .setThumbnail('https://cdn.discordapp.com/avatars/794563301577195541/de7d1c8b363ff7022dc88d7ca834f68d.png?size=1024')
      .setDescription(`
      **Commands** :
\`${prefix}iq\` : **iq game**
\`${prefix}love\` : **love game**
\`${prefix}gay\` : **gay game**
\`${prefix}covid\` : **covid stats**
\`${prefix}clyde\` : **clyde game**
\`${prefix}minecraft\` : **minecraft game**
\`${prefix}hug\` : **hug game**
\`${prefix}hate\` : **hate game**
\`${prefix}kill\` : **kill game**
\`${prefix}memes\` : **memes**
\`${prefix}gay-img <img>\` : **gay image Commands**
\`${prefix}triggered <img>\` : **triggered meme Commands**
\`${prefix}beautiful <img>\` : **beautiful meme Commands**
\`${prefix}delete <img>\` : **delete image Commands**
\`${prefix}trash <img>\` : **trash meme Commands**

**Other Commands** :
\`${prefix}bot\` : **botinfo Commands**
\`${prefix}ping\` : **Ping Commands**
\`${prefix}invite\` : **invite bot Commands**
\`${prefix}support\` : **support bot Commands**
\`${prefix}user\` : **userinfo Commands**
\`${prefix}grey\` : **grey an avatar Commands**
      `)
      .setColor('RANDOM')
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp();
     message.channel.send(helpEmbed);
  },
};
