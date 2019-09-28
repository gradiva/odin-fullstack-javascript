(function INDEX() {
  const { UI, Game } = window;

  let rootElement;
  let boardElement;
  let game;

  function setupGame() {
    rootElement.appendChild(boardElement);

    game = new Game();

    game.setOnStateChange((gameState) => {
      UI.update(gameState);
    });

    UI.setOnSelectEmptyCell(({ x, y }) => {
      game.playRound({ x, y });
    });

    console.log(game.getState());
    UI.update(game.getState());
  }

  function reset() {
    if (boardElement) {
      boardElement.remove();
    }

    setupGame();
  }

  function init() {
    rootElement = document.querySelector('#root');
    boardElement = UI.createBoard();

    const resetButton = document.querySelector('.reset-button');
    resetButton.addEventListener('click', reset);

    setupGame();
  }

  init();
}());
