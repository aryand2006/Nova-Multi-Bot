const express = require("express");
const app = express()

app.listen(3000, () => {
  console.log("Project is running!")
})

app.get("/", (req, res) => {
  res.send("Aadi Noob!");
})

const Discord = require("discord.js")
let db = require('quick.db') 
const weather = require('weather-js');
const { MessageEmbed } = require("discord.js");
const { Color } = require("config.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"]});
const { MessageActionRow, MessageButton } = require('discord.js');
const moment = require("moment")
const https = require('https');
 const url = 'https://www.reddit.com/r/memes/hot/.json?limit=100';
 const eye = 'https://www.reddit.com/r/meme/hot/.json?limit=100';
const canvacord = require('canvacord')
const axios = require(`axios`)
const Kitsu = require("kitsu.js");
const kitsu = new Kitsu(); 
client.snipe = new Discord.Collection()
client.on("messageDelete", deletedMsg => {
 client.snipe.set(deletedMsg.channel.id, deletedMsg)
})
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const fs = require("fs");
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands")
for(file of commands) {
  const commandName = file.split(".")[0]
  const command = require(`./Commands/${commandName}`)
  client.commands.set(commandName, command)
}

const { Snake } = require('discord-gamecord');
const { Something } = require("multipurpose-discord-package");
const something = new Something();
const { blackjack } = require('discord.js-games');
const ytSearch = require('yt-search');
var cheerio = require("cheerio");
var request = require("request");
const { Hangman } = require('klaymon');
const Tesseract = require("tesseract.js");


client.on('messageCreate', async (message) => {
  if (message.content.toLowerCase() === 'dps help') {
    const { MessageEmbed } = require('discord.js');
    const { MessageButton, MessageSelectMenu, MessageActionRow } = require('discord.js');
      

    let em1 = new MessageEmbed()
    .setTitle("Commands Available")
    
    .setDescription("Have fun reading it!")
    .addField("School Commands", "Page 2")
    .addField("Miscellaneous Commands", "Page 3")
    .addField("Image Commands", "Page 4")
    .addField("Gaming Commands", "Page 5")
    .addField("Informational Commands", "Page 6")
    .addField("credit", "Page 6")
    .setColor("RANDOM")
      
    let em2 = new MessageEmbed()
    .setTitle("Image Commands Available")
    .setDescription("Have fun reading it!")
    .addField("ad", "ad + (member)", true)
    .addField("affect", "affect + (member)", false)
    .addField("batslap", "batslap + (member)", true)
    .addField("beauty", "beauty + (member)", false )
    .addField("bed", "bed + (member)", true)
    .addField("comment", "comment + (member)", false)
    .addField("communism", "communism + (member)", false)
    .addField("egg", "egg + (member)", true)
    .addField("facepalm", "facepalm + (member)", false)
    .addField("fusion", "fusion + (member)", true)
    .addField("govt", "govt + (member)", false)
    .addField("hitler", "hitler + (member)", true)
    .addField("jail", "jail + (member)", false)
    .addField("kiss", "kiss + (member)", false)
    .addField("rip", "rip + (member)", true)
    .addField("spank", "spank + (member)", false)
    .addField("tattoo", "tattoo + (member)", true)
    .addField("thomas", "thomas + (member)", false)
    .addField("trash", "trash + (member)", true)
      
    .setColor("RANDOM")

    
      let em3 = new MessageEmbed()
    .setTitle("School Commands Available")
    .setDescription("Have fun reading it!")
    .addField("Commands for 9J (Permanent Link from Google Classroom)", "9jphy, 9jchem, 9jbio, 9jeco, 9jgeo, 9jciv, 9jhis, 9jsanskrit, 9jeng, 9jmaths, 9jai, 9jhomeroom")
    .addField("Commands for 9O (Permanent Link from Google Classroom)", "9ophy, 9ochem, 9obio, 9oeco, 9ogeo, 9ociv, 9ohis, 9ofrench, 9oeng, 9omaths")
    .addField("Commands for 10B (Permanent Link from Google Classroom)", "bphy, bbio, bgeo, bciv, bhis, bhindi, beng, bmaths, bit")
    .addField("Commands for 10E (Permanent Link from Google Classroom)", "ephy, echem, ebio, eeco, egeo, eciv, ehis, ehindi, eeng, emaths")
    .addField("Commands for 10K (Permanent Link from Google Classroom)", "kphy, kbio, keco, kgeo, kciv, khis, kgerman, keng, kmaths, ktest")
    .addField("Commands for 10L (Permanent Link from Google Classroom)", "lphy, lchem, lbio, leco, lgeo, lciv, lhis, lspan, leng, lmaths")
    .addField("Commands for 10N (Permanent Link from Google Classroom)", "nchem, nbio, neco, ngeo, nciv, nhis, nfrench, neng, nmaths")
    .addField("notices", "Gives link to Notices website")
    .addField("Commands for 10th grade", "monday, tuesday, wednesday, thursday, friday")
    .addField("Commands to get the Syllabus 10th grade boards", "syllabus, science, sst, maths, english, hindi")
    .addField("sample", "Sample Papers Link from CBSE")
    .addField("dcc", "Doubt Clearing Class Schedule")
    .addField("mt", "Gives the Monday Test Schedule of Class 10")
    .addField("dates", "Gives link to document ")
    .addField("preboard", "Pre Boards Schedule")
    .addField("calc", "Open a calculator")
    .setColor("RANDOM")
      let em4 = new MessageEmbed()
    .setTitle("Informational Commands Available")
    .setDescription("Have fun reading it!")
    .addField("weather(+a place)", "Tells you the Weather of a place of your choice")
     .addField("advice", "Gives you some life advice!")
    .addField("anime", "Search any anime")
    .addField("movie", "Search any movie")
    .addField("trans", "Translate a sectence to any language. Usage- trans hindi *text*")
    .addField("picture(with an image in the same message)", "Get the text out of an image inside a picture")
    .addField("covid", "Tells you the covid cases worldwide or in your sepcified country")
    .addField("google", "Google anything")
    .addField("playstore", "Search any game on the playstore")
    .addField("appstore", "Search any game on the appstore")
    .addField("urban", "Find the meaning of any word")
    .addField("wiki", "Search anything on wikipedia")
    .setColor("RANDOM")
      let em5 = new MessageEmbed()
    .setTitle("Miscellaneous Commands Available")
    .setDescription("Have fun reading it!")
  
    .addField("timer", "Starts a timer but works only in seconds")
    .addField("roast", "Roasts members of your server")
    
    .addField("afk", "Sets your afk")
    .addField("ms", "Minesweeper Game (Add the points until u reach the bomb once)")
    .addField("meme", "Sends a meme")
   
    .addField("hack", "Hacks someone(Please don't take it seriously)")
    .addField("si", "Info about your server")
    .addField("reverse", "Reverses the text of a word or sentence")
    .addField("8ball", "Ask me a question and I shall answer")
    .addField("kill", "Kill members of your server")
    .addField("slap", "Slap members of your server")
    .addField("pp", "Shows ur pp size")
    .addField("rr", "Play Russian Roullete where you have a 1/5 chance to stay alive")
    .addField("av", "Shows the avatar of a member of your server")
  
   
    .addField("!meme", "Sends a meme, similar to the meme command just faster.")
    .addField("binary", "Changes your text to binary")
    .addField("text", "Changes binary to text")
    .addField("pirate", "Says a sentence in pirate")
    .addField("emojify", "Emojifies any sentence")

    .addField("choose", "Chooses between several words")
    .addField("decide", "Chooses between yes and no for a question")
    .addField("8ball", "Ask me a question and I shall answer.")
    
    
    
    
    .setColor("RANDOM")
    
  
  
  let em6 = new MessageEmbed()
    .setTitle("Gaming Commands Available")
    .setDescription("Have fun reading it!")
  
    .addField("c4", "Play connect-4 with anyone in your server")
    .addField("chaos", "Find the words inside the line")
    .addField("click", "Click until your hands hurt")
    .addField("fight", "Fight with anyone in your server")
    .addField("hangman", "Play hangman")
    .addField("snake", "Play the snake game")
    .addField("ms", "Minesweeper Game (Add the points until u reach the bomb once)")
    .addField("quick", "Choose the reaction as fast as you can")
    .addField("ttt", "Play rock-paper-scissors with anyone in your server")
    .addField("rps", "Play rock-paper-scissors with anyone in your server")
    .addField("toss", "Coin flip")
    .addField("aki", "Play akinator.")
    .addField("bj", "Play the card game, **BlackJack**")
    .addField("slots", "Play **Slots**")
    .addField("pokemon", "Play Guess the Pokemon")
    .addField("trivia", "Answer a Trivia question")
    .addField("would", "Play Would You Rather")
    .setColor("RANDOM")
     
      let em7 = new MessageEmbed()
    .setTitle("Creater of the Bot")
    .setDescription("Killer Penguin#7648")
    .setFooter("DM for help")
     
      
      let startButton = new MessageButton()
      .setStyle('SUCCESS')
      .setLabel('<<')
      .setCustomId('start')
      
      let backButton = new MessageButton()
      .setStyle('SUCCESS')
      .setLabel('<')
      .setCustomId('back')
      
      let forwardButton = new MessageButton()
      .setStyle('SUCCESS')
      .setLabel('>')
      .setCustomId('forward')
      
      let endButton = new MessageButton()
      .setStyle('SUCCESS')
      .setLabel('>>')
      .setCustomId('end')
      
      const options = []
      
      const option1 = { label: 'Main Page', value: '0' }
      const option2 = { label: 'Image Commands Available', value: '1' }
      const option3 = { label: 'School Commands Available', value: '2' }
      const option4 = { label: 'Informational Commands Available', value: '3' }
      const option5 = { label: 'Miscellaneous Commands Available', value: '4' }
      const option6 = { label: 'Gaming Commands Available', value: '5' }
      const option7 = { label: 'Credit', value: '6' }
   
      
      options.push(option1, option2, option3, option4, option5, option6, option7)
      let menu = new MessageSelectMenu()
      .setPlaceholder('Change page')
      .setCustomId('pagMenu')
      .addOptions(options)
      .setMaxValues(1)
      .setMinValues(1)
      
      const allButtons = [startButton.setDisabled(true), backButton.setDisabled(true), forwardButton.setDisabled(false), endButton.setDisabled(false)]
      
      let group1 = new MessageActionRow().addComponents(menu)
      let group2 = new MessageActionRow().addComponents(allButtons)
      
      let helpMessage = await message.channel.send({
        content: `Click on the buttons to change page`,
        embeds: [em1],
        components: [group1, group2],
      })
      const collector = helpMessage.createMessageComponentCollector((button) => button.user.id === message.author.id, { time: 60e3 });
      
      var embeds = [em1, em2, em3, em4, em5, em6, em7]
      
      for(let i = 0; i< 0; i++) embeds.push(new MessageEmbed().setColor('ORANGE').setFooter(i))
      
      let currentPage = 0
      
      collector.on('collect', async (b) => {
        switch (b.customId) {
          case 'start':
            currentPage = 0
            group2 = new MessageActionRow().addComponents([startButton.setDisabled(true), backButton.setDisabled(true), forwardButton.setDisabled(false), endButton.setDisabled(false)])
            b.update({embeds: [embeds[currentPage]], components: [group1, group2]})
          break;
          case 'back':
            --currentPage;
            if (currentPage === 0) { group2 = new MessageActionRow().addComponents([startButton.setDisabled(true), backButton.setDisabled(true), forwardButton.setDisabled(false), endButton.setDisabled(false)]) } else { group2 = new MessageActionRow().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(false), endButton.setDisabled(false)]) }
            b.update({embeds: [embeds[currentPage]], components: [group1, group2]})
          break;
          case 'forward':
            currentPage++;
            if (currentPage === embeds.length - 1) { group2 = new MessageActionRow().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(true), endButton.setDisabled(true)]) } else { group2 = new MessageActionRow().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(false), endButton.setDisabled(false)]) }
            b.update({embeds: [embeds[currentPage]], components: [group1, group2]}) 
          break;
          case 'end':
            currentPage = embeds.length - 1;
            group2 = new MessageActionRow().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(true), endButton.setDisabled(true)])
            b.update({embeds: [embeds[currentPage]], components: [group1, group2]})
          break;
          case 'pagMenu':
            currentPage = parseInt(b.values[0])
            if (currentPage === 0) { group2 = new MessageActionRow().addComponents([startButton.setDisabled(true), backButton.setDisabled(true), forwardButton.setDisabled(false), endButton.setDisabled(false)]) } else if (currentPage === embeds.length - 1) { group2 = new MessageActionRow().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(true), endButton.setDisabled(true)]) } else { group2 = new MessageActionRow().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(false), endButton.setDisabled(false)]) }
            b.update({embeds: [embeds[currentPage]], components: [group1, group2]})
          break;
          default:
            currentPage = 0
            b.update({embeds: [embeds[currentPage]], components: null })
          break;
        }
      });
      collector.on('end', collected => {
        helpMessage.edit({ embeds: [helpMessage.embeds[0]], components: null })
      });

      collector.on('error', (e) => console.log(e));
    }


  if(message.content.includes(`<@!${client.user.id}>`)) {
    message.channel.send(`Please say dps help`)
  }
})


client.on("messageCreate", async (message) => {
if (message.content.toLowerCase() === "picture") {
if (message.attachments.size > 0) {
    message.attachments.forEach((attachment) => {
      // Getting the Image URL
      var ImageURL = attachment.proxyURL;

      // Running the image through Tesseract
      Tesseract.recognize(
        ImageURL,
        "eng",
        { logger: (m) => console.log(m) }
      ).then(({ data: { text } }) => {
        // Replying with the extracted test
        console.log(text);
        message.reply(text);
      });
    });
  }
  else {message.channel.send("You haven't sent an image to convert to text format")}
}


if (message.content.toLowerCase() === 'click') {
  const click = require('discord-click-speed');
const game = new click();
let user = message.mentions.users.first()

//game.solo(message);

//if(message.content.mentions(user)) {
//game.duo(message,player2);
//}

game.party(message) 
      
  }
  
  
  const fetch =  "node-fetch"
const { MessageEmbed } = require("discord.js")
const args = message.content.split(" ").slice(1)
if(message.content.toLowerCase().startsWith("wiki")) {
     const body = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(args.join(" "))}`,
          ).then(res => res.json().catch(() => {}));
        
        if (!body) return message.channel.send("❌ Error Page Not Found. :x:")
          if (body.title && body.title === "Not found.") return message.channel.send("❌ Error Page Not Found.");
      
        const embed = new Discord.MessageEmbed()
            .setTitle(`🌐 ${body.title} `)
        .addField("More Info: ",`**[Click Here!](${body.content_urls.desktop.page})**`, true)
            .setDescription(`** ${body.extract}**`)
            .setColor(`RANDOM`)
            .setFooter("Panda is cool")
        .setTimestamp()
        
         if (body.thumbnail) embed.setThumbnail(body.thumbnail.source);
        message.channel.send( { embeds : [ embed ] } );

    }

if(message.content.startsWith("youtube")) {
      const args = message.content.split(" ").slice(1)

   const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
 
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
 
        }
 
        const video = await videoFinder(args.join(' '));

        if(video) {

        
  message.channel.send(`${video.url}`)
      
  
  } else {
message.reply('no video found. sad')
  }
  }


  
    if (message.content.toLowerCase().startsWith("!neko")) {
    
     let neko = await something.fetchNeko();
     let embed = new Discord.MessageEmbed()
     .setTitle("Neko!")
     .setImage(neko)
     .setColor("RANDOM")
     message.channel.send( { embeds : [ embed ] } )
     
   } else if (message.content.toLowerCase().startsWith("!meme")) {
   
     let meme = await something.fetchMeme();
     let embed = new Discord.MessageEmbed()
     .setTitle(meme.title)
     .setImage(meme.image)
     .setColor("RANDOM")
     message.channel.send( { embeds : [ embed ] } )
     
   }
   else if (message.content.toLowerCase().startsWith("advice")) {
   
      let data = await something.fetchAdvice() // "Respect your elders."
   message.channel.send(data);
  
     
   }
   else if (message.content.toLowerCase().startsWith("binary")) {
     let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" ");
 if (!sentence) message.reply(":x: Enter a sentence for me to change to binary? :x:");
    let data = await something.textToBinary(`${sentence}`) // "1100010 1101001 1101110 1100001 1110010 1111001 100000 1110100 1100101 1110011 1110100"
   message.channel.send(data)
     
   }
   else if (message.content.toLowerCase().startsWith("text")) {
     let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" ");
 if (!sentence) message.reply(":x: Enter a binary code for me to change to text? :x:");
    let data = await something.binaryToText(`${sentence}`) // "binary test"
   message.channel.send(data)
     
   }
   else if (message.content.toLowerCase().startsWith("pirate")) {
     let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" ");
 if (!sentence) message.reply(":x: Enter a sentence for me to change to pirate? :x:");
    let data = await something.pirateSpeak(`${sentence}`) 
   message.channel.send(data)
     
   }
   else if (message.content.toLowerCase().startsWith("emojify")) {
     let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" ");
 if (!sentence) message.reply(":x: Enter a sentence for me to emojify :x:");
    let data = await something.emojify(`${sentence}`) 
   message.channel.send(data)
     
   }
});
client.on('messageCreate', async (message) => {
  if(message.content.toLowerCase() === 'snake') {
    new Snake({
      message: message,
      slash_command: false,
      embed: {
        title: 'Snake Game',
        color: '#5865F2',
        OverTitle: 'Game Over',
      },
      snake: { head: '🟢', body: '🟩', tail: '🟢' },
      emojis: {
        board: '⬛',
        food: '🍎',
        up: '⬆️', 
        down: '⬇️',
        right: '➡️',
        left: '⬅️',
      }
    }).startGame();
  }



  if (message.content.toLowerCase() === 'bj') {
    blackjack({ message });
}


});



client.on("messageCreate", message => {
  /*if(message.content.startsWith(prefix)) {*/
    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if(!command) return
    command.run(client, message, args)
    
  //}
})


client.on("messageCreate", message => {
  if(message.content === "ephy") {
    message.channel.send("https://meet.google.com/gkc-qsvm-iaj")
    
  }
  if(message.content === "echem") {
    message.channel.send("https://meet.google.com/kzn-cowp-jrf")
  }
   if(message.content === "ebio") {
    message.channel.send("https://meet.google.com/lookup/cparkkokbb")
  }
  if(message.content === "eeng") {
    message.channel.send("https://meet.google.com/lookup/e3b4ds7eqk")
  }
  if(message.content === "eeco") {
    message.channel.send("https://meet.google.com/wwo-ihek-hkm")
  }
  if(message.content === "egeo") {
    message.channel.send("https://meet.google.com/adw-ofow-hda")
  }
  if(message.content === "eciv") {
    message.channel.send("https://meet.google.com/sne-cyyc-bdh")
  }
  if(message.content === "ehis") {
    message.channel.send("https://meet.google.com/sma-hgor-vjr")
  }
  if(message.content === "ehindi") {
    message.channel.send("https://meet.google.com/acb-ouef-rxv")
  }
  if(message.content === "emaths") {
    message.channel.send("https://meet.google.com/obv-pvrf-gba")
  }

  if(message.content === "bhis") {
    message.channel.send("https://meet.google.com/ybv-qvkt-ufz")
  }
  if(message.content === "bciv") {
    message.channel.send("https://meet.google.com/xsv-zyiz-ybp")
  }
  if(message.content === "bgeo") {
    message.channel.send("https://meet.google.com/lookup/ewtcqs3hgp")
  }
  if(message.content === "bit") {
    message.channel.send("https://meet.google.com/mpq-kzxz-anw")
  }
  if(message.content === "bhindi") {
    message.channel.send("https://meet.google.com/wrz-vikp-sap")
  }
  if(message.content === "bphy") {
    message.channel.send("https://meet.google.com/evs-pvhd-djj")
  }
  if(message.content === "bchem") {
    message.channel.send("https://meet.google.com/yhy-inhn-fwa")
  }
  if(message.content === "bmaths") {
    message.channel.send("https://meet.google.com/jpw-gxsp-snz")
  }
  if(message.content === "bbio") {
    message.channel.send("https://meet.google.com/oqn-inqr-rvy")
  }
  if(message.content === "beng") {
    message.channel.send("https://meet.google.com/jde-ujpn-vjd")
  }
  
  if(message.content === "lhis") {
    message.channel.send("https://meet.google.com/lookup/gkxcwenzph")
  }
  if(message.content === "lciv") {
    message.channel.send("https://meet.google.com/yyi-qqhg-cjp")
  }
  if(message.content === "lgeo") {
    message.channel.send("https://meet.google.com/oea-tstx-hoo")
  }
  if(message.content === "leco") {
    message.channel.send("https://meet.google.com/qyj-jeqv-fnw")
  }
  if(message.content === "lspan") {
    message.channel.send("https://meet.google.com/lookup/apstpvyeck")
  }
  if(message.content === "lphy") {
    message.channel.send("https://meet.google.com/pro-zxkb-oiu")
  }
  if(message.content === "lchem") {
    message.channel.send("https://meet.google.com/yhy-inhn-fwa")
  }
  if(message.content === "lmaths") {
    message.channel.send("https://meet.google.com/lookup/b3vrxo6yh7")
  }
  if(message.content === "lbio") {
    message.channel.send("https://meet.google.com/gon-vgwf-ygw")
  }
  if(message.content === "leng") {
    message.channel.send("https://meet.google.com/lookup/f7wqbw3ajf")
  }

  if(message.content === "kphy") {
    message.channel.send("https://meet.google.com/jax-tzdp-sxi")
  }
   if(message.content === "kbio") {
    message.channel.send("https://meet.google.com/xja-njzj-ikz")
  }
  if(message.content === "keng") {
    message.channel.send("https://meet.google.com/azt-jzkn-qks")
  }
  if(message.content === "keco") {
    message.channel.send("https://meet.google.com/tjs-fgqs-dis")
  }
  if(message.content === "kgeo") {
    message.channel.send("https://meet.google.com/nfp-mzqg-ndo")
  }
  if(message.content === "kciv") {
    message.channel.send("https://meet.google.com/ijw-phsc-oxq")
  }
  if(message.content === "khis") {
    message.channel.send("https://meet.google.com/vhr-riks-owv")
  }
  if(message.content === "kgerman") {
    message.channel.send("https://meet.google.com/ksi-ayrp-kuz")
  }
  if(message.content === "kmaths") {
    message.channel.send("https://meet.google.com/gof-nfeq-fws")
  }
   if(message.content === "ktest") {
    message.channel.send("https://meet.google.com/rfr-khtn-ctc")
  }

  if(message.content === "nbio") {
    message.channel.send("https://meet.google.com/ato-hivq-swt")
  }
  if(message.content === "nchem") {
    message.channel.send("https://meet.google.com/lookup/f74jq557a5")
  }
  if(message.content === "neng") {
    message.channel.send("https://meet.google.com/gcy-ceai-cdw")
  }
  if(message.content === "neco") {
    message.channel.send("https://meet.google.com/nzj-hvvh-mmf")
  }
  if(message.content === "ngeo") {
    message.channel.send("https://meet.google.com/qje-mtco-czt")
  }
  if(message.content === "nciv") {
    message.channel.send("https://meet.google.com/lookup/ce7go75np3")
  }
  if(message.content === "nhis") {
    message.channel.send("https://meet.google.com/wck-jnuw-vdp")
  }
  if(message.content === "nfrench") {
    message.channel.send("https://meet.google.com/lookup/cqtj6icdmk")
  }
  if(message.content === "nmaths") {
    message.channel.send("https://meet.google.com/rgc-quze-xna ")
  }

  if(message.content === "9jeng") {
    message.channel.send("https://meet.google.com/oiu-bsyt-iuu")
  }
  if(message.content === "9jsanskrit") {
    message.channel.send("https://meet.google.com/ppd-phsh-tvc")
  }
  if(message.content === "9jmaths") {
    message.channel.send("https://meet.google.com/gkj-yiif-uiu")
  }
  if(message.content === "9jchem") {
    message.channel.send("https://meet.google.com/zii-weov-vfb")
  }
  if(message.content === "9jphy") {
    message.channel.send("https://meet.google.com/jid-rder-biv")
  }
  if(message.content === "9jbio") {
    message.channel.send("https://meet.google.com/egu-rsqq-buv")
  }
  if(message.content === "9jhis") {
    message.channel.send("https://meet.google.com/qzn-vddr-qrg")
  }
  if(message.content === "9jciv") {
    message.channel.send("https://meet.google.com/lookup/ep4qrhwvo5")
  }
  if(message.content === "9jgeo") {
    message.channel.send("https://meet.google.com/qsb-ijbi-etd")
  }
  if(message.content === "9jeco") {
    message.channel.send("https://meet.google.com/lookup/ganghdpjcg")
  }
  if(message.content === "9jai") {
    message.channel.send("https://meet.google.com/oao-kqru-tzy")
  }
  if(message.content === "9jhomeroom") {
    message.channel.send("https://meet.google.com/wyq-whqu-vbm")
  }

  if(message.content === "9oeng") {
    message.channel.send("https://meet.google.com/lookup/dejt4esp3p")
  }
  if(message.content === "9ofrench") {
    message.channel.send("https://meet.google.com/lookup/csfjt5gynz")
  }
  if(message.content === "9omaths") {
    message.channel.send("https://meet.google.com/cvh-znwx-wua")
  }
  if(message.content === "9ochem") {
    message.channel.send("https://meet.google.com/ovt-uixj-njt")
  }
  if(message.content === "9ophy") {
    message.channel.send("https://meet.google.com/oaa-igwk-hik")
  }
  if(message.content === "9obio") {
    message.channel.send("https://meet.google.com/lookup/gin3mw36wm")
  }
  if(message.content === "9ohis") {
    message.channel.send("https://meet.google.com/isv-qdcs-pzs")
  }
  if(message.content === "9ociv") {
    message.channel.send("https://meet.google.com/lookup/bkmneqvi77")
  }
  if(message.content === "9ogeo") {
    message.channel.send("https://meet.google.com/msg-nvtr-bxg")
  }
  if(message.content === "9oeco") {
    message.channel.send("https://meet.google.com/rsz-vdzc-qqt")
  }
 

  if(message.content === "notices") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Notices")
    .setURL("https://dpsrkp.net/category/notices/")
    .setDescription("Link to DPSRKP Notices Website")
    .setColor("RANDOM")
    .setTimestamp()

    message.channel.send( { embeds : [ embed ] } )
  }

  
  
  if(message.content === "sample") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Sample Papers for Class 10 by CBSE")
    .setURL("https://cbseacademic.nic.in/SQP_CLASSX_2021-22.html")
    .setDescription("Have fun doing them!!")
    .addField("Science", "https://cbseacademic.nic.in/web_material/SQP/ClassX_2021_22/Science-SQP_Term2.pdf")
    .addField("SST", "https://cbseacademic.nic.in/web_material/SQP/ClassX_2021_22/SocialScience-SQP_Term2.pdf" )
    .addField("Maths", "https://cbseacademic.nic.in/web_material/SQP/ClassX_2021_22/MathsStandard-SQP_Term2.pdf")
    .addField("English", "https://cbseacademic.nic.in/web_material/SQP/ClassX_2021_22/EnglishL-SQP_Term2.pdf")
    .addField("Hindi", "https://cbseacademic.nic.in/web_material/SQP/ClassX_2021_22/HindiCourseB-SQP_Term2.pdf")
    .addField("Spanish", "https://cbseacademic.nic.in/web_material/SQP/ClassX_2021_22/Spanish-SQP_Term2.pdf")

    .setColor("RANDOM")
    
    message.channel.send( { embeds : [ embed ] } )
  }

  if(message.content === "monday") {
    message.channel.send("The command has been changed to 9monday or 10monday according to the class your in.")
  }
  if(message.content === "tuesday") {
    message.channel.send("The command has been changed to 9tuesday or 10tuesday according to the class your in.")
  }
  if(message.content === "wednesday") {
    message.channel.send("The command has been changed to 9wednesday or 10wednesday according to the class your in.")
  }
  if(message.content === "thursday") {
    message.channel.send("The command has been changed to 9thursday or 10thursday according to the class your in.")
  }
  if(message.content === "friday") {
    message.channel.send("The command has been changed to 9friday or 10friday according to the class your in.")
  }

  if(message.content === "timetable") {
    let embed = new Discord.MessageEmbed()
    .setTitle("All classes timetable")
    .setURL("https://dpsrkp.net/session-2021-2022-schedule-30/")
    .setDescription("Link to where the Timetable came from")
    .setColor("RANDOM")
    .setTimestamp()

    message.channel.send( { embeds : [ embed ] } )
  }
  
  if(message.content === "9monday") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Monday timetable")
    .setImage("https://cdn.discordapp.com/attachments/778159409993351168/942444987017199616/unknown.png")
    .setColor("RANDOM")

    message.channel.send( { embeds : [ embed ] } )
  }
  if(message.content === "9tuesday") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Tuesday timetable")
    .setImage("https://cdn.discordapp.com/attachments/778159409993351168/942445034077311116/unknown.png")
    .setColor("RANDOM")

    message.channel.send( { embeds : [ embed ] } )
  }
  if(message.content === "9wednesday") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Wednesday timetable")
    .setImage("https://cdn.discordapp.com/attachments/778159409993351168/942445088292876369/unknown.png")
    .setColor("RANDOM")

    message.channel.send( { embeds : [ embed ] } )
  }
  if(message.content === "9thursday") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Thursday timetable")
    .setImage("https://cdn.discordapp.com/attachments/778159409993351168/942445146744705054/unknown.png")
    .setColor("RANDOM")

    message.channel.send( { embeds : [ embed ] } )
  }
  if(message.content === "9friday") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Friday timetable")
    .setImage("https://cdn.discordapp.com/attachments/778159409993351168/942445223932473374/unknown.png")
    .setColor("RANDOM")

    message.channel.send( { embeds : [ embed ] } )
  }


  if(message.content.toLowerCase() === "10monday") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Monday timetable")
    .setImage("https://cdn.discordapp.com/attachments/778159409993351168/942437085732831232/unknown.png")
    .setColor("RANDOM")

    message.channel.send( { embeds : [ embed ] } )
  }
  if(message.content.toLowerCase() === "10tuesday") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Tuesday timetable")
    .setImage("https://cdn.discordapp.com/attachments/778159409993351168/942437164183068712/unknown.png")
    .setColor("RANDOM")

    message.channel.send( { embeds : [ embed ] } )
  }
  if(message.content.toLowerCase() === "10wednesday") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Wednesday timetable")
    .setImage("https://cdn.discordapp.com/attachments/778159409993351168/942437251856625754/unknown.png")
    .setColor("RANDOM")

    message.channel.send( { embeds : [ embed ] } )
  }
  if(message.content.toLowerCase() === "10thursday") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Thursday timetable")
    .setImage("https://cdn.discordapp.com/attachments/778159409993351168/942437567549308949/unknown.png")
    .setColor("RANDOM")

    message.channel.send( { embeds : [ embed ] } )
  }
  if(message.content.toLowerCase() === "10friday") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Friday timetable")
    .setImage("https://cdn.discordapp.com/attachments/778159409993351168/942437630157680660/unknown.png")
    .setColor("RANDOM")

    message.channel.send( { embeds : [ embed ] } )
  }
//change these every week


  if(message.content === "credit") {
    message.channel.send("Made by Aryan Daga 10-E")
  }
  if(message.content === "dps invite") {
    message.channel.send("https://discord.com/api/oauth2/authorize?client_id=930727736916475904&permissions=8&scope=bot")
  }
  if(message.content.includes(`<@!${client.user.id}>`)) {
    message.channel.send(`Please say dps help`)
  }
  
 if(message.content.toLowerCase() === "preboard") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Pre Boards Schedule")
    .setURL("https://dpsrkp.net/schedule-for-annual-pre-board-x-xii-examination-2021-2022/")
    .setImage("https://cdn.discordapp.com/attachments/824929205119877121/941224482553610291/unknown.png")
    .setColor("RANDOM")

    message.channel.send( { embeds : [ embed ] } )
  }
  if(message.content.toLowerCase() === "dcc") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Doubt Clear Class Schedule")
    .setURL("https://dpsrkp.net/doubt-clearing-classes-8-28-feb-2022/")
    .setImage("https://cdn.discordapp.com/attachments/859098508636323911/940643246688841738/unknown.png")
    .setColor("RANDOM")

    message.channel.send( { embeds : [ embed ] } )
  }
  if(message.content === "10mt") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Monday Test Schedule")
    .setURL("https://cdn.discordapp.com/attachments/792710259390545920/922689834085146664/IMG-20211221-WA0007.jpg")
    .setImage("https://cdn.discordapp.com/attachments/728865816984027136/932826636934610974/unknown.png")
    .setColor("RANDOM")


    message.channel.send( { embeds : [ embed ] } )
  }


  if(message.content === "syllabus") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Syllabus for Class 10 Term 2 Boards")
    .setURL("https://docs.google.com/document/d/1x7qbFhytHCcHZaabHYG2Es_LDs_8xpHGFduInjpS_8I/edit?usp=sharing")
    .setColor("RANDOM")

    message.channel.send( { embeds : [ embed ] } )
  }
  if(message.content === "english") {
    let embed = new Discord.MessageEmbed()
    .setTitle("English Syllabus for Term 2 Boards")
    .setImage("https://cdn.discordapp.com/attachments/778159409993351168/938632699101458432/unknown.png")
    .setColor("RANDOM")

    message.channel.send( { embeds : [ embed ] } )
  }
  if(message.content === "maths") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Mathematics Syllabus for Term 2 Boards")
    .setImage("https://cdn.discordapp.com/attachments/778159409993351168/938633092392976394/unknown.png")
    .setColor("RANDOM")

    message.channel.send( { embeds : [ embed ] } )
  }
  if(message.content === "sst") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Social Science Syllabus for Term 2 Boards")
    .setImage("https://cdn.discordapp.com/attachments/778159409993351168/938633458555691028/unknown.png")
    .setColor("RANDOM")

    message.channel.send( { embeds : [ embed ] } )
  }
  if(message.content === "science") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Science Syllabus for Term 2 Boards")
    .setImage("https://cdn.discordapp.com/attachments/778159409993351168/938633816015269898/unknown.png")
    .setColor("RANDOM")

    message.channel.send( { embeds : [ embed ] } )
  }
  if(message.content === "hindi") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Hindi Syllabus for Term 2 Boards Part 1")
    .setImage("https://cdn.discordapp.com/attachments/792710259390545920/937623521134256178/unknown.png")
    
    .setColor("RANDOM")
    let embed2 = new Discord.MessageEmbed()
    .setTitle("Hindi Syllabus for Term 2 Boards Part 2")
    .setImage("https://cdn.discordapp.com/attachments/792710259390545920/937623521448833024/unknown.png")
    .setColor("RANDOM")

    message.channel.send( { embeds : [ embed, embed2 ] } )
  }
  if(message.content.toLowerCase() === "dates") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Nationalism in India-Important Dates")
    .setURL("https://docs.google.com/document/d/1Kur-LRrq-esWoqYqZmgZpjEJBj-g32pNCJDg7m-ay4c/edit?usp=sharing")
   
    .setImage("https://cdn.discordapp.com/attachments/778159409993351168/940667133635997696/unknown.png")
    .setColor("RANDOM")

    message.channel.send( { embeds : [ embed ] } )
  }
  if(message.content.toLowerCase() === "mapwork") {
    let embed = new Discord.MessageEmbed()
    .setTitle("ALL MAPWORK OF CLASS 10 TERM-2")
    .setURL("https://docs.google.com/presentation/d/1VKsxT0-aScPVty4DKxBcT48JS7zuP8lCNrFU_cCjYDk/edit?usp=sharing")
    
    .setImage("https://cdn.discordapp.com/attachments/728865816984027136/943766256757125210/unknown.png")
    .setColor("RANDOM")

    message.channel.send( { embeds : [ embed ] } )
  }
  if(message.content.toLowerCase().startsWith("roast")) {
    let user = message.mentions.users.first() || message.author
    let roasts = [`${user}, You look like you chomp on tree bark for fun`, `${user}, You're ugly when you cry.`, `${user}, When you die, people will struggle to think of nice things to say about you.`, `${user}, May the fleas of ten thousand camels live happily upon your buttocks`, `${user}, Your birth certificate is an apology letter from the abortion clinic.`, `${user}, The pitch of your voice drives dogs insane`, `${user}, You are what happens when women drink during pregnancy.`,`${user}, There is someone out there for everyone. For you, it’s a therapist.`,`${user}, I would smack you, but I’m against animal abuse.`,`${user}, If I wanted to kill myself, I would simply jump from your ego to your IQ.`,`${user}, Whoever told you to be yourself, gave you a bad advice.`,`${user}, I don’t hate you, but if you were drowning, I would give you a high five.`,`${user}, Sorry I can’t think of an insult dumb enough for you to understand.`,`${user}, I don’t know what makes you so stupid, but it works.`,`${user}, Whatever doesn’t kill you, disappoints me.`,`${user}, It is hilarious how you are trying to fit your entire vocabulary into one sentence.`,`${user}, I would call you an idiot, but it would be an insult for idiots.`,`${user}, If I had a dollar every time you shut up, I would give it back as a thank you.`,`${user}, You were so happy for the negativity of your Covid test, we didn’t want to spoil the happiness by telling you it was an IQ test.`,`${user}, You are like a software update. every time I see you, I immediately think “not now”.`,`${user}, You are the reason why there are instructions on shampoo bottles.`,`${user}, I think you just need a high five… in the face… with a chair.`,`${user}, I look at you and think what a waste of two billion years of the evolution.`,`${user}, It would be a great day If you used a glue stick instead of Chapstick.`,`${user}, You are the reason why God is not talking to us anymore.`,`${user}, Everyone is allowed to act stupid once, but you… you are abusing that privilege.`,`${user}, I am jealous of people who didn’t meet you.`,`${user}, What is wrong with you? Have you had too many drugs in mental hospital today?`,`${user}, It is better to shut your mouth and make people think you are stupid than open it and remove all doubt.`,`${user}, I am not ignoring you; I am just giving you a time to understand what you just said.`,`${user}, Every time I think you can’t get any dumber, you are proving me wrong.`,`${user}, Where is your off button?`,`${user}, You’re not simply a drama queen. You’re the whole royal family.`,`${user}, All mistakes are fixable, yet you aren’t.`,`${user}, When God made you, you must have been on the bottom of his “to-do” list.`,`${user}, You’re the reason the divorce rate is so high.`,`${user}, You can be anything you want…except good looking.`,`${user}, God wanted to spice the earth with jokes, and he made your kind`,`${user}, Remember, if anyone says you’re beautiful, it’s all lies`,`${user}, I know I make stupid choices, but you’re the worst of all my choices`,`${user}, Taking a picture of you would put a virus on my phone`,`${user}, Somewhere tree is producing oxygen for you. I’m sorry for it.`,`${user}, Your so annoying that you even make your Happy Meal cry.`,`${user}, Your face makes onions cry.`,`${user}, It’s impossible to underestimate you.`,`${user}, Don’t be ashamed of who you are. That’s your parents’ job.`,`${user}, I thought of you today. It reminded me to take out the trash.`,`${user}, You are like a cloud. When you disappear, it’s a beautiful day.`,`${user}, You just might be why the middle finger was invented in the first place.`,`${user}, If I had a face like yours, I’d sue my parents.`,`${user}, Keep rolling your eyes. Maybe you’ll find your brain back there.`,`${user}, I keep thinking you can’t get any dumber and you keep proving me wrong.`,`${user}, I’d explain stuff to you but I left my English-to-Idiot Dictionary at home.`,`${user}, I thought I had the flu, but then I realized your face makes me sick to my stomach.`,`${user}, When karma comes back to punch you in the face, I want to be there in case it needs help.`]
    message.channel.send(roasts[Math.floor(Math.random() * roasts.length)])
  }
  if(message.content.toLowerCase() === "ms") {
 let minesweeper = [`**Minesweeper** *(5x5 with 5 bombs)*
    ||:two:||||:three:||||:two:||||:one:||||:zero:||
    ||:boom:||||:boom:||||:boom:||||:one:||||:zero:||
    ||:two:||||:three:||||:two:||||:two:||||:one:||
    ||:zero:||||:one:||||:one:||||:two:||||:boom:||
    ||:zero:||||:one:||||:boom:||||:two:||||:one:||`, `**Minesweeper** *(5x5 with 5 bombs)*
    ||:zero:||||:one:||||:boom:||||:two:||||:one:||
    ||:one:||||:three:||||:four:||||:boom:||||:one:||
    ||:one:||||:boom:||||:boom:||||:two:||||:one:||
    ||:one:||||:two:||||:three:||||:two:||||:one:||
    ||:zero:||||:zero:||||:one:||||:boom:||||:one:||`, `**Minesweeper** *(5x5 with 5 bombs)*
    ||:boom:||||:two:||||:boom:||||:boom:||||:two:||
    ||:one:||||:two:||||:two:||||:three:||||:boom:||
    ||:zero:||||:zero:||||:zero:||||:one:||||:one:||
    ||:one:||||:one:||||:zero:||||:zero:||||:zero:||
    ||:boom:||||:one:||||:zero:||||:zero:||||:zero:||`, `**Minesweeper** *(5x5 with 5 bombs)*
    ||:one:||||:boom:||||:four:||||:boom:||||:two:||
    ||:three:||||:two:||||:two:||||:three:||||:boom:||
    ||:zero:||||:four:||||:zero:||||:one:||||:one:||
    ||:one:||||:two:||||:zero:||||:boom:||||:zero:||
    ||:boom:||||:one:||||:four:||||:two:||||:zero:||`]
    message.channel.send(`${minesweeper[Math.floor(Math.random() * minesweeper.length )]}`)
 }
 if(message.content.toLowerCase().startsWith('timer')) {
    message.react("👍🏻")
    const args = message.content.split(' ').splice(1);
    if(!args[0]) return message.channel.send('please include a valid time');
    if(isNaN(args[0])) return message.channel.send('please include a valid number');
    if(!args[1]) return message.channel.send('you have to include something for me to remind you with')
    setTimeout(() => {
      const msg = args.splice(1).join(' ');
      message.channel.send(`${message.author}, ${msg}`)
    }, parseInt(args[0], 10) * 1000)
  }
  if(message.content.toLowerCase() === "si") {
   let embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setAuthor(`Info for ${message.guild}`, message.guild.iconURL({ dynamic: true }))
    .setDescription(`Owner ${message.guild.owner}
                    Channels ${message.guild.channels.cache.size}
                    Roles ${message.guild.roles.cache.size}
                    Emojis ${message.guild.emojis.cache.size}
                    Verification Level ${message.guild.verificationLevel}
                    Region ${message.guild.region}`)
   .setThumbnail(`${message.guild.iconURL({ dynamic: true })}`)
   .setFooter(`ID: ${message.guild.id}, Created-${message.guild.createdAt.toDateString()}`)
 message.channel.send( {embeds:[ embed ] } )
}
if(message.content.toLowerCase().startsWith("8ball")) {
 let replies = ["Yes.", "No.", "Could happen.", "Maybe.", "Totally.", "Signs lead to no.", "Signs lead to yes.", "Yes. Wait no. Ummm...No.", "Reply hazy. Try again.", "Get a brain fool.", "c://no", "c://yes", "Sure.", "Why not?", "No way that is possible.", "Definitely not.", "Without a doubt." ]
 let embed = new Discord.MessageEmbed()
 .setTitle("8ball's Answer")
 .setDescription(`8ball's Answer: ${replies[Math.floor(Math.random() * replies.length)]}`)
 .setColor("RED")
 .setFooter("8ball has given you an answer")
 message.channel.send( { embeds : [ embed ] } )
 }
 if(message.content.startsWith("kill")) {
 let victim = message.mentions.users.first()
 if(!victim) message.reply("Mention someone to Kill")
 else{
let replies = [ (`${victim} has been shot`), (`${victim} has been stabbed`), (`${victim} has been drowned`), 
 (`${victim} has been electrified`), (`A goose honked at ${victim} to death`), 
 (`Some psychopath zapped ${victim} with his laser eyes`), 
 (`${victim} ate a poisonous potato`), (`${victim} died from slowmode being to long`), 
 (`${victim} was run over by car`), (`${victim} was pushed in lava`), (`${victim} was banned by the server owner`), 
 (`${victim} was found dead in a dumpster`), 
 (`Someone named Joe was found chewing on ${victim}'s leg`), (`${victim} got drunk and fell in the water`), 
 (`${victim} made a deal with the devil`), (`${victim} was hacked by an 
Oreo`), (`An alien named MEE6 abducted ${victim} in their sleep`),]

 message.channel.send(`${replies[Math.floor(Math.random() * replies.length)]}`) 
 }
 }
 
 if (message.content.toLowerCase().startsWith("slap")) {
 let l = message.mentions.members.first() 
 
 
 if(!l) message.reply(`:x: **Please Mention someone to Slap!** :x:`)
 else {
 
 let slappers = [
 "https://media1.tenor.com/images/40d2c4e6eca563646a1b64efd8d04471/tenor.gif?itemid=15575210",
 "https://media1.tenor.com/images/e59ef31bad50ca64ea09f36a17ee50f0/tenor.gif?itemid=11314821",
 "https://media1.tenor.com/images/31f29b3fcc20a486f44454209914266a/tenor.gif?itemid=17942299",
 "https://media1.tenor.com/images/b90654059ef2cf0a4784c9b7b6e0e485/tenor.gif?itemid=17262452",
 "https://media1.tenor.com/images/29c7edfb6df189e313354fb3423ce333/tenor.gif?itemid=15308590", "https://tenor.com/view/spank-tom-and-jerry-tom-puppy-gif-5196956", "https://tenor.com/view/spongebob-squarepants-patrick-star-gloves-slap-gif-17514643"
 ];
 let embed = new Discord.MessageEmbed()
 .setColor('RED')
 .setTitle(':sob: Ohhh, a super slap!!')
 .setDescription(`${message.author} slapped ${l}! It hurts! :sob:`)
 .setImage(`${slappers[Math.floor(Math.random() * slappers.length)]}`);
 
 message.channel.send( { embeds : [ embed ] } )
 }
 
 }
 if (message.content.toLowerCase().startsWith("toss")) {
 let coin = ["Heads", "Tails"];
 let embed = new Discord.MessageEmbed()
 .setTitle(`${coin[Math.floor(Math.random() * coin.length)]} :coin:`)
 .setImage(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZw5xABZkhpTYrIBw7hFSRfPeCjh2Nfpmy1Qgtx1MuFwJzd7gptStZHIGOAkqLzRzo5E&usqp=CAU`)
 .setColor("RANDOM")
 .setFooter(`Your coin has been flipped`);

  message.channel.send( { embeds : [ embed ] } )

 }
 if(message.content.toLowerCase().startsWith("reverse")) {
 const args = message.content
 .trim()
 .split(/ +/g);
 let text = args.slice(1).join(" ");
if(!text) return message.channel.send(`:x: | Please provide text!! **Example:** \`b!reverse I love cakes\``)

 // Reverse the message
 var reversed = '';
 var i = text.length;

 while (i > 0) {
 reversed += text.substring(i - 1, i);
 i--;
 }

 // Reply to the user's message
 message.channel.send(reversed);
 }
 if (message.content.toLowerCase() === 'russianroulette' || message.content === 'rr') {
 let bullets = [
 'You are safe!',
 'You are safe!',
 'You are safe!',
 'You are safe!',
 'Your life flashes before your eyes as the bullet hits you , You died'
 ];
 message.reply(`${bullets[Math.floor(Math.random() * bullets.length)]}`);
 }
if(message.content.toLowerCase().startsWith("av")) {
let user = message.mentions.users.first() || message.author;
if(!user) return
let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Profile Picture")
.setTimestamp()
.setImage(user.displayAvatarURL({ dynamic: true }))
message.channel.send( { embeds : [ embed ] } )
};

if (message.content.toLowerCase().startsWith('pp')) {
 let user = message.mentions.users.first() || message.author;
 let pp = [
 '',
 '=',
 '==',
 '===',
 '====',
 '=====',
 '======',
 '=======',
 '========',
 '=========',
 '==========',
 '===========',
 '============',
 '=============',
 '==============',
 '===============',
 '================='
 ];
 message.reply(
 `${user},  your pp is :- 8${pp[Math.floor(Math.random() * pp.length)]}D`
 );
 }
 





 if(message.content.startsWith("hack")) {
const user = message.mentions.users.first();
if(!user) return message.channel.send("Mention Someone to hack")
message.channel.send("**[25%]** Finding IP..").then(m => {
setTimeout(() => {
m.edit("**[50%]** IP FOUND! Looking for email and password..").then(m2 => {
setTimeout(() => {
m2.edit(`**[75%]** DONE! email: ${user.username}@icloud.com | password: XjdhgikshGdk`).then(m3 => {
setTimeout(() => {
m3.edit("**[100%]** Deleting System32..").then(m4 => {
setTimeout(() => {
m4.edit(`done hacking ${user}! all info was sent online.`)
}, 5500);
});
}, 2800);
});
}, 4500);
});
}, 5000);
});
};
if(message.content.startsWith("gayrate")) {
 let gayrate = ["0%", "9%", "19%", "25%", "98%", "96%", "5%", "63%", "43%", "36%", "67%", "61%", "52%", "59%", "77%", "84%", "81%", "12%", "100%", "21%"]
 let victim = message.mentions.users.first()
 if(!victim) message.reply("Mentioneaza pe Cineva ca sa Vezi cat de Gay e lmao")
 else{
 message.channel.send(`${victim} ${gayrate[Math.floor(Math.random() * gayrate.length)]} Gay :rainbow_flag: `)
 }
}

if (message.content.startsWith('meme')) {
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });

 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;

 var link = 'https://reddit.com' + index.permalink;

 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('RANDOM')
 .setURL(link);

 message.channel.send( { embeds: [textembed] } );
 }

 var image = index.preview.images[0].source.url.replace(/\&amp\;/,"&");
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;

 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('RANDOM')
 .setURL(link);

 message.channel.send( { embeds: [textembed] } );
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('RANDOM')
 .setURL(link);
 message.channel.send( { embeds: [imageembed] } );
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 if(db.has(message.author.id + 'afk')){
 message.channel.send(`${message.author}Welcome back I removed your AFK.`)
 db.delete(message.author.id + 'afk')
 
 db.delete(message.author.id + 'messageafk')
}
if (message.content.startsWith('afk')) {
 message.channel.send('Aight, I have set your AFK. I will send a message to the users who mention you..')
// then here you use the database :
 db.set(message.author.id + 'afk','true')

 db.set(message.author.id + 'messageafk', message.content.split(' ').slice(2))
 }
if (message.content.includes('afk off')) {
 db.delete(message.author.id + 'afk')

 db.delete(message.author.id + 'messageafk')
 }
// If one of the mentions is the user
 message.mentions.users.forEach(user =>{
 if (message.author.bot) return false;

 if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
 if(db.has(user.id + 'afk')) message.channel.send(`The user you mentioned is currently AFK.. Leave a message if urgent by DMing him`)
})
 if (message.content.toLowerCase().startsWith('weather')) {
  let args = message.content.split(" ").splice(1)
  weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        // 'C' can be changed to 'F' for farneheit results
        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Please specify a location')

        if(result === undefined || result.length === 0) return message.channel.send('**Invalid** location');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather forecast for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('Timezone', `UTC${location.timezone}`, true)
        .addField('Degree Type', 'Celsius', true)
        .addField('Temperature', `${current.temperature}°`, true)
        .addField('Wind', current.winddisplay, true)
        .addField('Feels like', `${current.feelslike}°`, true)
        .addField('Humidity', `${current.humidity}%`, true)


        message.channel.send( { embeds: [weatherinfo] } )
        })        
}
if(message.content.toLowerCase().startsWith("purge")){
let arg = message.content.split(" ")
if(message.member.permissions.has("ADMINISTRATOR")) {
let clear = arg[1];
if(!clear) return message.channel.send(`:x: | \`Incorrect usage of command you need to provide an amount of messages to Clear.\` 
**Example:** \`purge 50\` `)
if(isNaN(clear)) return message.channel.send(":x: | ``Please Put a Valid Number to Clear messages.``")
if(clear > 100) return message.channel.send(":x: | ``I can't Clear more than 100 messages.``")
if(clear < 1) return message.channel.send(":x: | ``You cannot Clear less than 1 message.``")

message.channel.bulkDelete(clear)
message.channel.send(`:white_check_mark: | \`Succesfully cleared ${clear} messages! | If purge fails please make sure I have MANAGE_MESSAGES to make the purge seccessful.\` `)
.then(message => 
 message.delete({timeout: 10000})
 )
}else{
message.reply("You dont have perms!")
} 
}


if (message.content.toLowerCase().startsWith("dm")) {
  const whattosend = message.content.slice("".length).trim().split(/ +/);
whattosend.shift().toLowerCase().split(" ")[1]
const member = message.mentions.members.first() || message.guild.members.cache.get(whattosend[0])
if(!member) return message.channel.send('Provide a user!')
if(!whattosend[1]) return message.channel.send('What do you want to send to them?')
message.delete()

member.send(whattosend.slice(1).join(" "))
}

if(message.content.toLowerCase().startsWith("choose")) {
 const args = message.content.trim().split(" ");
 const command = args.shift().toLowerCase();
if(!args.length) return message.channel.send(`You didn't provide any arguements ${message.author}!`)
else {
 message.channel.send(`I choose **${args[Math.floor(Math.random() * args.length)]}**`)
}
}


if(message.content.includes("shinchan")) {
    message.channel.send("https://media.discordapp.net/attachments/877031352355151893/943537983200579654/a6d1a578-659c-4aba-b27c-b1a0c88ead1d.gif")
  }
if(message.content.includes("<@!917350472476672051>")) {
    message.channel.send("https://media.discordapp.net/attachments/877031352355151893/943537983200579654/a6d1a578-659c-4aba-b27c-b1a0c88ead1d.gif")
  }
  //remove these when they finish
})
client.on('ready', () => {
  client.user.setActivity('dps help', { type: 'PLAYING'})
})

client.login(process.env.token);
//khatam