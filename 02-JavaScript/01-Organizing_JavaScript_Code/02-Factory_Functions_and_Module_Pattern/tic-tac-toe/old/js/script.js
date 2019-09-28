const Player = (mark) => {
  const score = 0;
  const usedCells = [];
  return { mark, score, usedCells };
};

const player1 = Player('X');
const player2 = Player('O');
let currentPlayer = player1;

const switchPlayer = () => {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else { currentPlayer = player1; }
};

const gameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];
  const gameOver = false;
  const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]];

  return { board, gameOver, winningPatterns };
})();

const isGameOver = (board, playerMarks) => {
  const hasPlayerWon = gameBoard.winningPatterns
    .some(pattern => pattern.every(mark => playerMarks.includes(mark)));

  const boardIsFull = board.every(value => value !== '');

  if (hasPlayerWon || boardIsFull) {
    gameBoard.gameOver = true;
  }
};

const playGame = () => {
  const boardCells = [...(document.querySelectorAll('.board-cell'))];
  boardCells.forEach((cell) => {
    cell.addEventListener('click', () => {
      if (cell.textContent === '' && gameBoard.gameOver === false) {
        cell.textContent = currentPlayer.mark;
        currentPlayer.usedCells.push(boardCells.indexOf(cell));
        gameBoard.board[boardCells.indexOf(cell)] = cell.textContent;
        isGameOver(gameBoard.board, currentPlayer.usedCells);
        switchPlayer();
      }
    });
  });
};

function init() {
  playGame();
}

init();
