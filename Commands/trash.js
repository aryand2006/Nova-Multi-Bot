const DIG = require("discord-image-generation");
const Discord = require("discord.js");

module.exports = {
    config: {
        name: 'Trash',
        description: 'Trash',
        aliases: ["trash"],
        usage: '',
        category: 'images',
    },
    run: async (bot, message, args) => {
 //   const m = bot.findMember(message, args, true);
   
 let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
 let m = await message.channel.send("**Please Wait...**");   
 let avatar = user.user.displayAvatarURL({
      dynamic: false,
      format: "png",
    });

    let img = await new DIG.Trash().getImage(avatar);

    let attach = new Discord.MessageAttachment(img, "trash.png");
    m.delete({ timeout: 5000 });
    message.channel.send({files: [attach]});
  },
};