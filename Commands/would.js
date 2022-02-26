const Discord = module.require("discord.js");
const { WouldYouRather } = require('discord-gamecord')

module.exports = {
  name: "WouldYouRather",
  description: "WouldYouRather",
  run: async (client, message, args) => {
   
          new WouldYouRather({
  message: message,
  embed: {
    title: 'Would You Rather',
    color: '#5865F2',
  },
  thinkMessage: '**Thinking...**',
  buttons: { option1: 'Option 1', option2: 'Option 2' },
  othersMessage: 'You are not allowed to use buttons for this message!',
      }).startGame();
  },
};