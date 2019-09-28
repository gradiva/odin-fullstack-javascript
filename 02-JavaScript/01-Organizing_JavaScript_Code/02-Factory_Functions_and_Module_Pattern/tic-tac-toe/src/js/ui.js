(function UI() {
  const EMPTY = 'empty';
  const TAKEN = 'taken';

  const cells = [];
  let onSelectEmptyCell;

  const createCell = ({ x, y }) => {
    const cell = document.createElement('div');
    cell.classList.add('board-cell');

    cell.dataset.x = x;
    cell.dataset.y = y;
    cell.dataset.status = EMPTY;

    return cell;
  };

  const createBoard = () => {
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('board-container');

    for (let y = 0; y < 3; y += 1) {
      const row = [];

      for (let x = 0; x < 3; x += 1) {
        const cell = createCell({ x, y });
        boardContainer.appendChild(cell);

        row.push(cell);
      }

      cells.push(row);
    }

    boardContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('board-cell') && event.target.dataset.status === EMPTY) {
        onSelectEmptyCell({ x: event.target.dataset.x, y: event.target.dataset.y });
      }
    });

    return boardContainer;
  };

  const setOnSelectEmptyCell = (callback) => {
    onSelectEmptyCell = callback;
  };

  const updateCells = (boardState) => {
    for (let y = 0; y < 3; y += 1) {
      for (let x = 0; x < 3; x += 1) {
        const cellState = boardState[y][x];
        const cell = cells[y][x];
        if (cellState === 0) {
          cell.dataset.status = EMPTY;
          cell.classList.remove('mark-X', 'mark-O');
        } else {
          cell.dataset.status = TAKEN;
          cell.classList.add(cellState === 1 ? 'mark-X' : 'mark-O');
        }
      }
    }
  };

  const update = (gameState) => {
    updateCells(gameState.board);
  };

  window.UI = { createBoard, setOnSelectEmptyCell, update };
}());
