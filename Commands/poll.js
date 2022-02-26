const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "poll",
        aliases: [""],
        description: "Start a simple poll in the server",
        category: "utility",
        usage: "poll <question>",
    },
    run: async (bot, message, args) => {
     

        if (!args[0])
            return message.channel.send("**Please Enter A Query!**");

        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle(`Poll For ${message.guild.name}`)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setDescription(args.join(' '))
        var msg = await message.channel.send( { embeds : [ embed ] } );

        await msg.react('✅');
        await msg.react('❌');

        message.delete({ timeout: 1000 });
    }
}