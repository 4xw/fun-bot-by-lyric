const {MessageEmbed} = require('discord.js')
var gay = (Math.floor (Math.random() * 100));

module.exports = {
  name: "gay",
  description: "gay game command",
  execute(message) {
    let user = message.mentions.users.first() || message.author;
    var helpEmbed = new MessageEmbed()
      .setTitle("Gay Rate :rainbow_flag: :")
      .setDescription(`
the gay rate of <@${user.id}> is : ${gay[Math.floor(Math.random() * gay.length)]} :kiss_mm: .
      `)
      .setThumbnail(user.displayAvatarURL())
      .setColor('RANDOM')
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp();
     message.channel.send(helpEmbed);
  },
};
