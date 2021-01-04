const {MessageEmbed} = require('discord.js')
var hate = (Math.floor (Math.random() * 100));

module.exports = {
  name: "hate",
  description: "hate game command",
  execute(message) {
    let user = message.mentions.users.first() || message.author;
    var helpEmbed = new MessageEmbed()
      .setTitle("Hate Rate :")
      .setDescription(`
<@${message.author.id}> hate <@${user.id}> : **${hate[Math.floor(Math.random() * hate.length)]}** .
      `)
      .setFooter(message.author.username, message.author.avatarURL())
      .setThumbnail(user.displayAvatarURL())
      .setColor('RANDOM')
      .setTimestamp();
     message.channel.send(helpEmbed);
  },
};
