export const createGameBoard = () => {
  // Represents where the ships are placed on the board.
  const board = new Array(10)
    .fill()
    .map(() => new Array(10).fill(0));

  // Represents the cells being uncovered.
  const uncoveredCells = new Array(10)
    .fill()
    .map(() => new Array(10).fill(0));

  const ships = [];

  /**
   * Places a ship on the board.
   * @param {object} arg.ship - An instance of a ship
   * @param {object} arg.coordinates - { x, y }
   * @param {string} arg.orientation - "horizontal"|"vertical"
   * @returns {boolean} - Whether the ship was successfully placed or not
   */
  const placeShip = ({
    ship,
    coordinates,
    orientation,
  }) => {
    const shipCoordinates = new Array(ship.length).fill()
      .map((_, index) => {
        const { x, y } = coordinates;

        if (orientation === 'horizontal') {
          return { x: x + index, y };
        }

        if (orientation === 'vertical') {
          return { x, y: y + index };
        }

        return undefined;
      });

    const shipCanBePlaced = shipCoordinates.every(({ x, y }) => board[y] && board[y][x] === 0);

    if (!shipCanBePlaced) return false;

    const shipId = ships.length + 1;

    ships.push({
      ship,
      coordinates: shipCoordinates,
      orientation,
      id: shipId,
    });

    shipCoordinates.forEach(({ x, y }) => {
      board[y][x] = shipId;
    });

    return true;
  };

  const uncoverCell = ({ x, y }) => {
    if (y < 0
      || x < 0
      || y > uncoveredCells.length - 1
      || x > uncoveredCells[y].length - 1
      || uncoveredCells[y][x] !== 0
    ) {
      return false;
    }

    uncoveredCells[y][x] = 1;
    return true;
  };

  const getShips = () => ships;
  const getBoard = () => board;
  const getUncoveredCells = () => uncoveredCells;

  const isGameOver = () => {
    const coordinatesWithShips = ships.reduce((arr, entry) => (
      [...arr, ...entry.coordinates]
    ), []);

    return coordinatesWithShips.every((entry) => uncoveredCells[entry.y][entry.x]);
  };

  return {
    isGameOver,
    placeShip,
    uncoverCell,
    getShips,
    getBoard,
    getUncoveredCells,
  };
};
