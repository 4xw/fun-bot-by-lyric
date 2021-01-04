const {MessageEmbed} = require('discord.js')
var hate = ["10%","25%","56%","54%","53%","75%","15%","52%","100%","5%","51%","45%","62%","31%","71%","55%","15%","72%","17%","29%","19%","99%","78%","55%","61%","99.99%","73%","57%","37%","21%","1000%","-1%","76%","69%","96%","54%","81%","86%","100%","99.99%","100%","99%","10%","20%","30%","40%","50%","60%","70%","80%","90%"];
  
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
