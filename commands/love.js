const {MessageEmbed} = require('discord.js')

var love = (Math.floor (Math.random() * 100));
var love2 = [
    "https://cdn.discordapp.com/attachments/753673593170427924/753724055647027271/love_4.gif",
    "https://cdn.discordapp.com/attachments/753673593170427924/753724093592895508/love_7.gif",
    "https://cdn.discordapp.com/attachments/753673593170427924/753724103709556776/love1.gif",
    "https://cdn.discordapp.com/attachments/753673593170427924/753724108247924915/love.gif",
    "https://cdn.discordapp.com/attachments/753673593170427924/753724113868161074/love5.gif",
    "https://cdn.discordapp.com/attachments/753673593170427924/753724169891479732/love3.gif",
    "https://cdn.discordapp.com/attachments/753673593170427924/753724172370182266/love6.gif",
    "https://cdn.discordapp.com/attachments/753673593170427924/753724202183294996/love9.gif"
  ];
  
module.exports = {
  name: "lovee",
  description: "love game by Lyric..",
  execute(message) {
    let user = message.mentions.users.first() || message.author;
    var helpEmbed = new MessageEmbed()
      .setTitle("Love Rate :")
      .setDescription(`
<@${message.author.id}> Love <@${user.id}> : **${love}%** :hearts: .
      `)
      .setImage(love2[Math.floor(Math.random() * love2.length)])
      .setFooter(message.author.username, message.author.avatarURL())
      .setColor('RANDOM')
      .setTimestamp();
     message.channel.send(helpEmbed);
  },
};
