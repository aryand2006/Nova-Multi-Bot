const { ChaosWords } = require("sudo-minigames");

module.exports = {
 name: "ChaosWords",
 category: "info",
 description: "Would you rather?",
 run: async (client, message, args) => {
   await ChaosWords({
    message: message,
     embed: {
      title: 'ChaosWords',
        description: 'You have **{{time}}** to find the hidden words in the below sentence.',
        color: '#5865F2',
        field1: 'Sentence:',
        field2: 'Words Found/Remaining Words:',
        field3: 'Words found:',
        field4: 'Words:',
        footer: 'Made by Aryan',
        timestamp: true
     },
     
  thinkMessage: 'I am thinking',
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	buttons: { optionA: 'Option A', optionB: 'Option B' }
   })
  },
 }