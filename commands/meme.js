module.exports = {
    name: 'memes',
    discription: 'memes command',
    execute(message, args) {
        if (message.content.startsWith(prefix + "meme")) {
            const randomPuppy = require("random-puppy");
            const subreddits = ["memes", "meme"];
            const random = subreddits[Math.floor(Math.random() * subreddits.length)];
            const img = randomPuppy(random);

            message.channel.send(img).then(m=> {
              m.react('👍')
              m.react('👎')
            })
          }
    },
};