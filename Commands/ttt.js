const Discord = module.require("discord.js");
const { TicTacToe } = require('discord-gamecord')

module.exports = {
  name: "TicTacToe",
  description: "TicTacToe in discord!",
  run: async (client, message, args) => {
    let player = message.mentions.users.first();
if(!player){
return message.reply(":x: Please mention someone to play with? :x:")
  }
          new TicTacToe({
        message: message,
        opponent: message.mentions.users.first(),
        embed: {
          title: 'Tic Tac Toe',
    overTitle: 'Game Over',
    color: '#5865F2',
        },
        oEmoji: '🔵',
  xEmoji: '❌',
  blankEmoji: '➖',
  oColor: 'PRIMARY',
  xColor: 'DANGER',
  waitMessage: 'Waiting for the opponent...',
  turnMessage: '{emoji} | Its now **{player}** turn!',
  askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Tic Tac Toe!',
  cancelMessage: 'Looks like they refused to have a game of Tic Tac Toe. \:(',
  timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
  drawMessage: 'It was a draw!',
  winMessage: '{emoji} | **{winner}** won the game!',
  gameEndMessage: 'The game went unfinished :(',
      }).startGame();
  },
};