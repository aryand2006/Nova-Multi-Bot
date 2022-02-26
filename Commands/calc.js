const { Calculator } = require("sudo-minigames");

module.exports = {
 name: "Calculator",
 category: "info",
 description: "Get the information about any anime",
 run: async (client, message, args) => {
   await Calculator({
    message: message,
     embed: {
       title: `Calculator`,
       color: `#5865F2`,
       footer: `Made by Aryan`,
       timestamp: true
     },
     
   disabledQuery: 'Calculator is disabled!',
    invalidQuery: 'The provided equation is invalid!',
    othersMessage: 'Only <@{{author}}> can use the buttons!'
   })
  },
 }