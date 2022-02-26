const { Fight } = require("sudo-minigames");
module.exports = {
 name: "Fight",
 category: "info",
 description: "Fight any member of your server",
 run: async (client, message, args) => {
   let player = message.mentions.users.first();
   if(!player){
return message.reply(":x: Please mention someone to fight with? :x:")
  }
await Fight({
    message: message,
    opponent: message.mentions.users.first(),
    embed: {
        title: 'Fight',
        color: '#5865F2',
        footer: 'Made by Aryan'
    },
    buttons: {
      hit: 'Hit',
      heal: 'Heal',
      cancel: 'Stop',
      accept: 'Accept',
      deny: 'Deny'
    },
    acceptMessage: '<@{{challenger}}> has challenged <@{{opponent}}> for a fight!',
    winMessage: 'GG, <@{{winner}}> won the fight!',
    endMessage: '<@{{opponent}}> didn\'t answer in time. So, I dropped the game!',
    cancelMessage: '<@{{opponent}}> refused to have a fight with you!',
    fightMessage: '{{player}} you go first!',
    opponentsTurnMessage: 'Please wait for your opponents move!',
    highHealthMessage: 'You cannot heal if your HP is above 80!',
    lowHealthMessage: 'You cannot cancel the fight if your HP is below 50!',
    othersMessage: 'Only {{author}} can use the buttons!'
 })
  },
 }

