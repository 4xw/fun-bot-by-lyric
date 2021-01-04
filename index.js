const fs = require('fs');
const jimp = require('jimp')
const Timeout = new Set();
const Discord = require('discord.js');
const ms = require('ms')
const prefix = '!';

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.guild) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
  
    if (cmd.length == 0) return;
    let command = client.commands.get(cmd)
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) command.execute(message, args)
})

client.on("message", message => {
if (message.content.startsWith(prefix + "developers")) {
const embed = new Discord.MessageEmbed()
.setThumbnail("https://cdn.discordapp.com/attachments/786165267134545950/790210949285675016/logogif3.gif")
.setTitle("Aerv Developers")
.setDescription(`
**My developers <:Aerv:786181581781467167>** :

<:hashtag:783397275292401696> <@447090228726071316> :

1 - Age : 16
2 - Country : Algeria :flag_dz:
3 - started devloping bots in : 12/2019

<:hashtag:783397275292401696> <@374162561362558977> :

1 - Age : 17
2 - Country : egypt :flag_eg: 
3 - started devloping bots in : 10/2018
`)
message.channel.send(embed);
}
});

client.on('ready', message => {
    client.user.setActivity('Unex testing.')
    console.log('i am ready!')
})

const covid = process.env.covid;
client.on('message', message => {
if  (message.content.toLowerCase().startsWith(prefix + "covid"))  {
  let country = message.content.toLowerCase().split(" ").slice(1).join(" ");
  corona(country, message);
};
});
function corona(country, message) {
const fetch = require("node-fetch");
fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
  .then(async data => {
  data = await data.json();
  let embed = new Discord.MessageEmbed()
    .setThumbnail(data.countryInfo.flag)
    .setTitle(`Covid-19 Stats in : ${data.country}`)
    .addField("Cases :", `**${data.cases}**`, true)
    .addField("deaths :", `**${data.deaths}**` , true)
    .addField("Recovered :", `**${data.recovered}**` , true)
    .addField("Number of new cases today :", `**${data.todayCases}**` , true)
    .addField("The number of new dead today :", `**${data.todayDeaths}**` , true)
    .setFooter(`${message.author.username}`, message.author.avatarURL());
  message.channel.send(embed);
});
};

client.on("message", async message => {
if (message.content.startsWith(prefix + "meme")) {
const randomPuppy = require("random-puppy");
const subreddits = ["memes", "meme"];
const random = subreddits[Math.floor(Math.random() * subreddits.length)];
const img = await randomPuppy(random);

message.channel.send(img).then(m=> {
m.react('👍')
m.react('👎')
})
}
});

client.on('message',message=>{
if(message.content.startsWith(prefix + "minecraft")){
let args = message.content.split(" ").slice(1).join("%20")
let args2 = message.content.split("  ").slice(1).join("%20")
if(!args) return message.channel.send("Type a text").then(m=>{m.delete({timeout:10000})})
message.channel.send(`https://minecraftskinstealer.com/achievement/11/Achievement%20Get!/${args}%20${args2}`)
}
});

client.on('message',message=>{
  if(message.content.startsWith(prefix + "clyde")){
  let args = message.content.split(" ").slice(1).join("%20")
  let args2 = message.content.split("  ").slice(1).join("%20")
  if(!args) return message.channel.send("Type a text").then(m=>{m.delete({timeout:10000})})
  message.channel.send(`https://ctk-api.herokuapp.com/clyde/${args}%20${args2}`)
  }
  });

  client.on('message', async (message)=>{
    if(message.content.startsWith(prefix + "grey")){
        if (message.attachments.size > 0) {
            let image1 = message.attachments.first().url || message.author.displayAvatarURL() 
            let image = await jimp.read(image1)
            image.greyscale()
            image.write('public/image/greyscale.png')

            message.channel.send(``, { files: [`public/image/greyscale.png`] })




           
            
          }
        

    }
})

client.login('Nzk0NTYzMzAxNTc3MTk1NTQx.X-8ovQ.Iz1tBETjv99W-CB1CdWrMfKAuGo')