/* eslint-disable no-continue */
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

const choices = [ROCK, PAPER, SCISSORS];

const strings = {
  paperBeatsRock: 'Paper beats Rock!',
  rockBeatsScissors: 'Rock beats Scissors!',
  scissorsBeatsPaper: 'Scissors beats Paper!',
  tie: 'It ended in a tie.',
  youWin: 'You Win.',
  youLose: 'You Lose, Computer Wins.',
  tryAgain: 'Try again typing rock, paper or scissors',
};

const randomizeChoice = () => choices[Math.floor(Math.random() * choices.length)];

const aBeatsB = (a, b) => (
  (a === ROCK && b === SCISSORS)
  || (a === PAPER && b === ROCK)
  || (a === SCISSORS && b === PAPER)
);

const getWinnigChoiceString = (winningChoice) => {
  switch (winningChoice) {
    case ROCK:
      return strings.rockBeatsScissors;

    case PAPER:
      return strings.paperBeatsRock;

    case SCISSORS:
      return strings.scissorsBeatsPaper;

    default:
      return undefined;
  }
};

const game = (numberOfRounds) => {
  let playerScore = 0;
  let computerScore = 0;
  let round = 0;
  let playerSelection;
  let computerSelection;

  do {
    do {
      playerSelection = prompt('Choose rock, paper or scissors').toUpperCase();

      if (!choices.includes(playerSelection)) {
        alert(strings.tryAgain);
      }
    } while (!choices.includes(playerSelection));

    computerSelection = randomizeChoice();

    if (playerSelection === computerSelection) {
      alert(strings.tie);
      continue;
    }

    round += 1;

    if (aBeatsB(playerSelection, computerSelection)) {
      playerScore += 1;
      alert(`${strings.youWin} ${getWinnigChoiceString(playerSelection)}`);
    } else {
      computerScore += 1;
      alert(`${strings.youLose} ${getWinnigChoiceString(computerSelection)}`);
    }
  } while (round < numberOfRounds);

  if (playerScore > computerScore) {
    alert(`You have ${playerScore} points and the computer has
    ${computerScore} points.  You win`);
  } else {
    alert(`The computer has ${computerScore} points and you have 
    ${playerScore} points.  The computer wins this game.`);
  }
};

game(prompt('Choose number of rounds'));
