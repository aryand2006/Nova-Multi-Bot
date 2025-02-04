# Nova Multi Bot (Brother's Bot)

## **Overview**
This project is a Discord bot with various commands and an Express.js server. The bot includes features like school-related commands, gaming utilities, memes, and general information. The Express server is set up to handle simple web responses.

---

## **Features**

### **Express Server**
- Runs on port `3000`
- Basic root endpoint (`"/"`) returning a simple message

### **Discord Bot Functionalities**
#### 🎮 Gaming
- Hangman
- Snake
- Connect 4
- Blackjack
- Russian Roulette
- Akinator
- Minesweeper
- Fight
- Click
- Chaos
- Quick Reaction
- Tic tac toe
- Rock Paper Scissors
- Coin Flip
- Slots
- Guess the Pokemon
- Trivia
- Would you rather?

#### 🛠️ Moderation
- AFK System
- Message Sniping
- Server Info
- Welcome Message
- Auto-role assignment
- User Avatar Veiwer

#### 🎭 Fun Commands
- Memes Generator
- Roasts
- 8ball
- Text Reverser
- Pirate Speak
- Advice (gives you life advice)
- Hack someone
- Say a sentence in pirate
- Emojify any sentence

#### 📚 Utilities
- Timetable
- Syllabus Links
- Pre-board and Board Exams Schedule
- Sample Paper Links
- Calculator
- Timer
- Set AFK
- Reverse the text of a word or sentence
- Change your text to binary
- Change binary to text
- Choose between several words
- Decide between yes or no

#### 🌍 Informational
- Image OCR (Image to Text)
- Translate from any language to any language
- Weather
- Wikipedia Lookup
- Google Search
- Translation
- Anime/Movie Lookup
- Appstore Lookup
- Urban Dictionary Search

#### 🖼️ Image Editing (or Memes with user's profile pictures)
- Facepalm
- Beauty
- Jail Effect
- Tattoo Filter
- Fusion Generator
- Advertisement Generator
- Affect Generator
- Batslap Generator
- Beautiful Generator
- Bed Generator
- Comment Generator
- Communism Generator
- Egg Generator
- Fusion Generator
- Govt Generator
- Hitler Generator
- Kiss Generator
- Rip Generator
- Spank Generator
- Thomas Generator
- Trash Generator
- Kill someone
- Slap someone

---

## **Installation**

### **Prerequisites**
- [Node.js](https://nodejs.org/) installed
- A Discord bot token
- Required npm packages (`express`, `discord.js`, `quick.db`, `weather-js`, `axios`, `canvacord`, etc.)

### **Setup Instructions**
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/discord-bot.git
   cd discord-bot
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `config.js` file with:
   ```js
   module.exports = {
     Token: "YOUR_DISCORD_BOT_TOKEN",
     Prefix: "!",
     Color: "RANDOM"
   };
   ```
4. Start the server and bot:
   ```sh
   node index.js
   ```

---

## **Usage**
- Start the bot and use the prefix (e.g., `!meme`, `!weather New York`, `!fight @user`).
- Express server runs at `http://localhost:3000/`

---

## **Dependencies**

| Package | Description |
|---------|-------------|
| [Express](https://www.npmjs.com/package/express) | Web framework |
| [Discord.js](https://www.npmjs.com/package/discord.js) | Discord bot API |
| [Quick.db](https://www.npmjs.com/package/quick.db) | Lightweight database |
| [Weather-js](https://www.npmjs.com/package/weather-js) | Weather API |
| [Canvacord](https://www.npmjs.com/package/canvacord) | Image manipulation |
| [Axios](https://www.npmjs.com/package/axios) | HTTP requests |
| [Tesseract.js](https://www.npmjs.com/package/tesseract.js) | OCR processing |
