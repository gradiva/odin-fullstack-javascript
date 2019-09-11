const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

const choices = [ROCK, PAPER, SCISSORS];

const strings = {
  welcomeMessage: 'Start game',
  paperBeatsRock: 'Paper beats Rock!',
  rockBeatsScissors: 'Rock beats Scissors!',
  scissorsBeatsPaper: 'Scissors beats Paper!',
  tie: 'It ended in a tie.',
  youWin: 'You Win.',
  youLose: 'You Lose, Computer Wins.',
};

const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');
const resetButton = document.querySelector('.reset-button');
const roundDisplay = document.querySelector('.round');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const gameResultDisplay = document.querySelector('.game-result');

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

let round = 0;
let playerScore = 0;
let computerScore = 0;
let gameResult = strings.welcomeMessage;
let computerChoice;

const render = () => {
  roundDisplay.textContent = round;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  gameResultDisplay.textContent = gameResult;
};

const playRound = (playerChoice) => {
  if (computerScore < 5 && playerScore < 5) {
    computerChoice = randomizeChoice();
    if (playerChoice !== computerChoice) {
      round += 1;
      if (aBeatsB(playerChoice, computerChoice)) {
        playerScore += 1;
        gameResult = `${strings.youWin} ${getWinnigChoiceString(playerChoice)}`;
      } else {
        computerScore += 1;
        gameResult = `${strings.youLose} ${getWinnigChoiceString(computerChoice)}`;
      }
    } else {
      gameResult = strings.tie;
    }
  }
  render();
};

const reset = () => {
  round = 0;
  playerScore = 0;
  computerScore = 0;
  gameResult = strings.welcomeMessage;
  render();
};

rockButton.addEventListener('click', () => { playRound(ROCK); });
paperButton.addEventListener('click', () => { playRound(PAPER); });
scissorsButton.addEventListener('click', () => { playRound(SCISSORS); });
resetButton.addEventListener('click', () => { reset(); });

render();
