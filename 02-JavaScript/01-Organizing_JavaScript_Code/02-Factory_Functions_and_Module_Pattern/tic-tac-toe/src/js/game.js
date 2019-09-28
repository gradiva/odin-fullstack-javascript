(function GAME() {
  class Game {
    constructor() {
      const board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

      this.state = {
        board,
        currentPlayer: 1,
        isGameOver: false,
        winner: 0,
      };
    }

    evaluateBoard() {
      const { board } = this.state;

      const rows = board;
      const columns = board[0].map((column, index) => board.map(row => row[index]));
      const diagonals = [
        board.map((row, index) => row[index]),
        board.map((row, index) => row[row.length - 1 - index]),
      ];

      const patterns = [...rows, ...columns, ...diagonals];

      patterns.some((pattern) => {
        const unique = [...new Set(pattern)];

        if (unique.length === 1 && unique[0] > 0) {
          [this.state.winner] = unique;
          this.state.isGameOver = true;
        }

        return this.state.isGameOver;
      });
    }

    getState() {
      return JSON.parse(JSON.stringify(this.state));
    }

    playRound({ x, y }) {
      if (this.state.isGameOver || this.state.board[y][x] !== 0) return;

      this.state.board[y][x] = this.state.currentPlayer;
      this.state.currentPlayer = this.state.currentPlayer === 1 ? 2 : 1;

      this.evaluateBoard();

      if (this.onStateChange) {
        this.onStateChange(this.getState());
      }
    }

    setOnStateChange(callback) {
      this.onStateChange = callback;
    }
  }

  window.Game = Game;
}());
