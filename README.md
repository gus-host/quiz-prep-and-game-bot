# My Idea
My idea for the hackathon involves basically two projects.
- A discord quiz prep and game bot
- An article - A guide on how to use Powershell terminal to attempt quests.

## First Idea: A discord quiz prep and game bot.
As the name implies the discord bot is a quiz prep and game bot. 
### quiz prep
- The idea behind the quiz prep is basically to help stackies attempt or increase their chances of winning quizzes on the [quiz time](https://discord.com/channels/895564164783808523/1084499262144000021) channel on stackup discord server.
- Stackies would have to go to the server I created on any of the channels to test themselves on some likely possible questions which I have created in my code.
- For instance if a quiz would be on the [Towards Wallet Solutions in Web3](https://earn.stackup.dev/campaigns/towards-wallet-solutions-in-web3) campaign, and specifically on the first quest [Overview of wallets](https://earn.stackup.dev/campaigns/towards-wallet-solutions-in-web3/quests/quest-1-overview-of-wallets-1a83) stackies could come to the quiz discord bot on my server to test themselves for that quest and get prepared for the quiz on [quiz time](https://discord.com/channels/895564164783808523/1084499262144000021).
- In such a case the ping would be !C60Q1 (for campaign 60 quest 1).

#### How to Play the Quiz
**Start the quiz:** A user can start a quiz by typing `!startquiz` in the Discord chat. The bot will ask the first question. The user has 1 minute to answer each question by reacting with the corresponding emoji.

**Answer a question:** Users can react with the correct emoji to answer the question (e.g., 1️⃣, 2️⃣, 3️⃣, 4️⃣). The bot will respond with whether the answer is correct and proceed to the next question.

**Timer:** If the user does not answer within 1 minute, the bot will inform the user that their time is up and move to the next question.

**End of the quiz:** When all questions have been answered or time is up, the bot will display the user's score and end the quiz. You can also end it by using `!endquiz`.

**Restarting the quiz:** If users want to play again, they can simply use the `!startquiz` command to begin a new round.


This is a [video demo](https://www.youtube.com/watch?v=YhOhQJxbMK4) of the functionality of the quiz prep. 

To test the bot, click [here](https://discord.gg/YnFw8Dv8) to join a channel on the server. You can also test the bot on ANY channel.


### Game - Guess my number Game

- This is a simple but interesting game added as one of the features of the discord bot. 
- The focus here is to help increase engagement with the bot.

#### How to Play the Game**

**Start the game:** A user can start a game by typing !startgame in the Discord chat. The bot will pick a random number between 1 and 100 and notify the user to start guessing. The user has 10 attempts.

**Make a guess:** Users can guess the number by typing !guess <number> (e.g., !guess 42). The bot will respond with whether the guess is too high, too low, or correct. The user has 1 minute to make each guess.

**Timer:** If the user does not guess within 1 minute, the game will end, and the bot will inform the user that their time is up.

**Winning the game:** When a user guesses the correct number, the bot will congratulate the user, and the game will end.

**Running out of attempts:** If the user runs out of attempts, the bot will inform the user and reveal the correct number, ending the game.

**Restarting the game:** If users want to play again, they can simply use the !startgame command to begin a new round.

**Ending the game:** A user can end a game with the !endgame ping.


Watch the video demo [here](https://www.youtube.com/watch?v=BRMFfTkeIL0)



## Second Idea: An article
**Reason for making the article**

I had decided to make this article to help stackies in attempting quests where they may need to run commands in their `PowerShell` terminal but given in bash or CMD in the quest. 

This wAas as result of a particular quest (quest1 of the `Developing an API Server with FastAPI` campaign), where I found out that some stackies especially window users were having issues with activating a their virtual environment.

So quest master - Ser Suzaku, adviced I create a  an article for it 
The article is as shown here
https://medium.com/@obiemeriachristian/a-guide-on-how-to-use-powershell-instead-of-cmd-or-bash-to-attempt-quests-on-stackup-98c650807593
