const {MessageEmbed} = require('discord.js')
var hug = [
    "https://cdn.discordapp.com/attachments/785165066332798996/785923521330151515/2.gif",
      "https://cdn.discordapp.com/attachments/785165066332798996/785923614829707284/1.gif",
      "https://cdn.discordapp.com/attachments/785165066332798996/785923668316389389/3.gif",
      "https://cdn.discordapp.com/attachments/785165066332798996/785923739208122378/4.gif",
      "https://cdn.discordapp.com/attachments/785165066332798996/785923821366542356/5.gif",
      "https://cdn.discordapp.com/attachments/785165066332798996/785923893231747172/8.gif",
      "https://cdn.discordapp.com/attachments/785165066332798996/785923982791802951/10.gif"
    ];

module.exports = {
  name: "hug",
  description: "hug game command",
  execute(message) {
    let user = message.mentions.users.first() || message.author;
    var helpEmbed = new MessageEmbed()
      .setDescription(`
      **<@${message.author.id}> hug <@${user.id}> :heart: . 
      Wonderful romance!**`)
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp()
      .setColor('RANDOM')
      .setImage(hug[Math.floor(Math.random() * hug.length)]);

      message.channel.send(helpEmbed);
  },
};
