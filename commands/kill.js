const {MessageEmbed} = require('discord.js')

var hug = [
    "https://cdn.discordapp.com/attachments/785165066332798996/785926858495229972/1.png",
    "https://cdn.discordapp.com/attachments/785165066332798996/785926870301671424/2.gif",
    "https://cdn.discordapp.com/attachments/785165066332798996/785926872717721660/3.gif"
  ]

module.exports = {
  name: "kill",
  description: "kill game command",
  execute(message) {
    let user = message.mentions.users.first() || message.author;
    var helpEmbed = new MessageEmbed()
      .setDescription(`
      <@${message.author.id}> Kill Mr.<@${user.id}>
      sad!**`)
      .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp()
      .setColor('RANDOM')
      .setImage(hug[Math.floor(Math.random() * hug.length)]);

      message.channel.send(helpEmbed);
  },
};
