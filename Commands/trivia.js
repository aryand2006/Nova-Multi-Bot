const Discord = module.require("discord.js");
const { Trivia } = require('discord-gamecord')

module.exports = {
  name: "Trivia",
  description: "Trivia",
  run: async (client, message, args) => {
   
          new Trivia({
        message: message,
       
        embed: {
          title: 'Trivia',
    description: 'You have {time} seconds to respond!',
    color: '#5865F2',
  },
  difficulty: 'medium',
  winMessage: 'GG, Your answer was correct! It was **{answer}**',
  loseMessage: 'Your answer was Incorrect! The correct answer was **{answer}**',
  othersMessage: 'You are not allowed to use buttons for this message!',
      }).startGame();
  },
};