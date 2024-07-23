const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');
const quizData = require("./quizData");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Bot is running!'));

app.listen(port, () => console.log(`Bot is listening at http://localhost:${port}`));

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
  ],
});

let numberToGuess = null;
let gameActive = false;
let attemptsLeft = 0;
let guessTimeout;

let quizActive = false;
let currentQuestionIndex = 0;
let score = 0;
let quizTimeout;
const quizReactions = ["1️⃣", "2️⃣", "3️⃣", "4️⃣"];

client.once("ready", () => {
  console.log("Bot is online!");
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  const prefix = "!";

  if (message.content.startsWith(`${prefix}startgame`)) {
    if (gameActive) {
      message.channel.send("A game is already in progress!");
    } else {
      numberToGuess = Math.floor(Math.random() * 100) + 1;
      gameActive = true;
      attemptsLeft = 10;
      message.channel.send(
        "I have picked a number between 1 and 100. Start guessing! You have 10 attempts."
      );
      startGuessTimer(message.channel);
    }
  }

  if (message.content.startsWith(`${prefix}endgame`)) {
    if (gameActive) {
      gameActive = false;
      message.channel.send(
        `The current game has now ended! Use !startgame to start a new game`
      );
    } else {
      message.channel.send(
        "No game is currently active! Use !startgame to start a new game"
      );
      startGuessTimer(message.channel);
    }
  }

  if (message.content.startsWith(`${prefix}guess`)) {
    if (!gameActive) {
      message.channel.send(
        "No game is currently active. Use !startgame to start a new game."
      );
      return;
    }

    clearTimeout(guessTimeout);
    const guess = parseInt(message.content.split(" ")[1], 10);
    if (isNaN(guess)) {
      message.channel.send("Please enter a valid number.");
      startGuessTimer(message.channel);
      return;
    }

    attemptsLeft--;

    if (guess < numberToGuess) {
      message.channel.send(`Too low! You have ${attemptsLeft} attempts left.`);
    } else if (guess > numberToGuess) {
      message.channel.send(`Too high! You have ${attemptsLeft} attempts left.`);
    } else {
      message.channel.send(
        `Congratulations! You guessed the number ${numberToGuess}!`
      );
      gameActive = false;
      return;
    }

    if (attemptsLeft <= 0) {
      message.channel.send(
        `You've run out of attempts! The number was ${numberToGuess}.`
      );
      gameActive = false;
      return;
    }

    startGuessTimer(message.channel);
  }

  if (message.content.startsWith(`${prefix}startquiz`)) {
    if (quizActive) {
      message.channel.send("A quiz is already in progress!");
    } else {
      quizActive = true;
      currentQuestionIndex = 0;
      score = 0;
      message.channel.send(
        "Starting the quiz! You have 1 minute to answer each question."
      );
      askQuestion(message.channel);
    }
  }
  if (message.content.startsWith(`${prefix}endquiz`)) {
    if (quizActive) {
      quizActive = false;
      message.channel.send(
        "The quiz has now ended! Use !startquiz to start quiz again"
      );
    } else {
      message.channel.send(
        "No quiz is currently on, use !startquiz to do quiz again"
      );
    }
  }
});

client.on("messageReactionAdd", (reaction, user) => {
  if (user.bot || !quizActive) return;

  handleQuizAnswer(reaction, user);
});

function startGuessTimer(channel) {
  guessTimeout = setTimeout(() => {
    if (gameActive) {
      channel.send("Time is up! You took too long to guess.");
      gameActive = false;
    }
  }, 60000); // 1 minute
}

async function askQuestion(channel) {
  const question = quizData[currentQuestionIndex];
  const options = question.options
    .map((option, index) => `${quizReactions[index]}: ${option}`)
    .join("\n");

  const quizMessage = await channel.send(
    `Question ${currentQuestionIndex + 1}: ${question.question}\n\n${options}`
  );

  for (let i = 0; i < question.options.length; i++) {
    await quizMessage.react(quizReactions[i]);
  }

  startQuizTimer(channel, quizMessage);
}

function startQuizTimer(channel, quizMessage) {
  quizTimeout = setTimeout(() => {
    if (quizActive) {
      channel.send("Time is up for this question!");
      quizActive = false;
      quizMessage.reactions.removeAll();
    }
  }, 60000); // 1 minute
}

function handleQuizAnswer(reaction, user) {
  const question = quizData[currentQuestionIndex];
  const selectedOptionIndex = quizReactions.indexOf(reaction.emoji.name);

  if (selectedOptionIndex === -1) return;

  const selectedOption = question.options[selectedOptionIndex];

  clearTimeout(quizTimeout);

  if (selectedOptionIndex === question.answer) {
    reaction.message.channel.send(
      `Correct! ${user.username} answered correctly.`
    );
    score++;
  } else {
    reaction.message.channel.send(
      `Wrong! The correct answer was "${question.answer + 1}". \n${
        question.explanation
      }`
    );
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    askQuestion(reaction.message.channel);
  } else {
    reaction.message.channel.send(
      `Quiz over! You scored ${score} out of ${quizData.length}.`
    );
    quizActive = false;
  }
}

client.login(process.env.TOKEN);
