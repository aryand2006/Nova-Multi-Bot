const googleIt = require('google-it')
const Discord = require(`discord.js`);

exports.run = (bot, message, args) => {
   let embed = new Discord.MessageEmbed()
        .setTitle(":globe_with_meridians: Google Search Results :globe_with_meridians:")
        .setColor(3426654)
        .setFooter(`Request by: ${message.author.tag}`)
        .setTimestamp()
            

    googleIt({'query': args.join(' ')}).then(results => {
        results.forEach(function(item, index) { 
            embed.addField((index + 1) + ": " + item.title, "<" + item.link + ">");
        });
        
        message.channel.send( { embeds : [ embed ] } );
    }).catch(e => {
       
    });
};

module.exports.help = {
    name: 'google',
    aliases: []
}