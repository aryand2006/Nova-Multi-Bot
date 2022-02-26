const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "communism",
  aliases: [],
  category: "Image",
  description: "make u a communist lol",
  usage: "bed <user>",
  run: async (client, message, args) => {
    if(!message.guild.me.permissions.has("SEND_MESSAGES")) return;
    
   const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;


    const embed = new MessageEmbed()
    .setImage(encodeURI
    (`https://api.palpatinebot.repl.co/communism?image=${member.displayAvatarURL({ dynamic: false, format: 'png'})}`))

    return message.channel.send({embeds: [embed] })
  }
};