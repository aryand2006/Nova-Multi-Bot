const { GuessTheNumber } = require("sudo-minigames");

module.exports = {
 name: "GuessTheNumber",
 category: "info",
 description: "Guess the Number",
 run: async (client, message, args) => {
   await GuessTheNumber({
    message: message,
     embed: {
      title: 'Guess The Number',
       description: 'You have **{{time}}** to guess the number which is between 1-500.',
		color: '#5865F2',
        footer: 'Made by Aryan',
        timestamp: true
     },
     
  publicGame: true,
	number: Math.floor(Math.random() * 500),
	time: 60000,
	winMessage: {
		publicGame:
			'GG, The number which I guessed was **{{number}}**. <@{{winner}}> made it in **{{time}}**.\n\n__**Stats of the game:**__\n**Duration**: {{time}}\n**Number of participants**: {{totalparticipants}} Participants\n**Participants**: {{participants}}',
		privateGame:
			'GG, The number which I guessed was **{{number}}**. You made it in **{{time}}**.',
	},
	loseMessage:
		'Better luck next time! The number which I guessed was **{{number}}**.',
	bigNumberMessage: 'No {{author}}! My number is greater than **{{number}}**.',
	smallNumberMessage:
		'No {{author}}! My number is smaller than **{{number}}**.',
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	buttonText: 'Cancel',
	ongoingMessage:
		"A game is already runnning in <#{{channel}}>. You can't start a new one!",
   })
  },
 }

