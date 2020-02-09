import { createGameBoard } from '../gameBoard';
import { shipTypes, createShip } from '../ship';

describe('createGameBoard', () => {
  describe('placeShip', () => {
    it('should place a ship horizontally given valid coordinates', () => {
      const gameBoard = createGameBoard();
      const ship = createShip(shipTypes.DESTROYER);

      const couldBePlaced = gameBoard.placeShip({
        ship,
        coordinates: { x: 3, y: 2 },
        orientation: 'horizontal',
      });

      expect(couldBePlaced).toBe(true);

      const expectedBoard = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ];

      expect(gameBoard.getBoard()).toMatchObject(expectedBoard);
    });

    it('should place a ship vertically given valid coordinates', () => {
      const gameBoard = createGameBoard();
      const ship = createShip(shipTypes.CRUISER);

      const couldBePlaced = gameBoard.placeShip({
        ship,
        coordinates: { x: 3, y: 2 },
        orientation: 'vertical',
      });

      expect(couldBePlaced).toBe(true);

      const expectedBoard = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ];

      expect(gameBoard.getBoard()).toMatchObject(expectedBoard);
    });

    it('should return false when trying to place a ship horizontally and there is no room for it', () => {
      const gameBoard = createGameBoard();
      const ship = createShip(shipTypes.BATTLESHIP);

      const couldBePlaced = gameBoard.placeShip({
        ship,
        coordinates: { x: 9, y: 2 },
        orientation: 'horizontal',
      });

      expect(couldBePlaced).toBe(false);

      const expectedBoard = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ];

      expect(gameBoard.getBoard()).toMatchObject(expectedBoard);
    });

    it('should return false when trying to place a ship vertically and there is no room for it', () => {
      const gameBoard = createGameBoard();
      const ship = createShip(shipTypes.BATTLESHIP);

      const couldBePlaced = gameBoard.placeShip({
        ship,
        coordinates: { x: 3, y: 8 },
        orientation: 'vertical',
      });

      expect(couldBePlaced).toBe(false);

      const expectedBoard = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ];

      expect(gameBoard.getBoard()).toMatchObject(expectedBoard);
    });

    it('should not place ship when given coordinates are already taken', () => {
      const gameBoard = createGameBoard();

      gameBoard.placeShip({
        ship: createShip(shipTypes.DESTROYER),
        coordinates: { x: 3, y: 2 },
        orientation: 'horizontal',
      });

      const couldBePlaced = gameBoard.placeShip({
        ship: createShip(shipTypes.SUBMARINE),
        coordinates: { x: 3, y: 2 },
        orientation: 'vertical',
      });

      expect(couldBePlaced).toBe(false);

      gameBoard.placeShip({
        ship: createShip(shipTypes.CRUISER),
        coordinates: { x: 5, y: 2 },
        orientation: 'vertical',
      });

      const expectedBoard = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ];

      expect(gameBoard.getBoard()).toMatchObject(expectedBoard);
    });
  });

  describe('uncoverCell', () => {
    it('should uncover a cells', () => {
      const gameBoard = createGameBoard();

      gameBoard.uncoverCell({ x: 2, y: 3 });
      gameBoard.uncoverCell({ x: 5, y: 8 });
      gameBoard.uncoverCell({ x: 3, y: 4 });

      const expectedUncoveredCells = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ];

      expect(gameBoard.getUncoveredCells()).toMatchObject(expectedUncoveredCells);
    });

    it('should return true if successfull and false if already taken or outside of board', () => {
      const gameBoard = createGameBoard();

      expect(gameBoard.uncoverCell({ x: 1, y: 2 })).toBe(true);
      expect(gameBoard.uncoverCell({ x: 1, y: 2 })).toBe(false);
      expect(gameBoard.uncoverCell({ x: 9, y: 9 })).toBe(true);
      expect(gameBoard.uncoverCell({ x: -1, y: -1 })).toBe(false);
      expect(gameBoard.uncoverCell({ x: 10, y: 10 })).toBe(false);

      const expectedUncoveredCells = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      ];

      expect(gameBoard.getUncoveredCells()).toMatchObject(expectedUncoveredCells);
    });
  });

  describe('isGameOver', () => {
    it('game is not over if ', () => {
      const gameBoard = createGameBoard();

      gameBoard.placeShip({
        ship: createShip(shipTypes.DESTROYER),
        coordinates: { x: 3, y: 2 },
        orientation: 'horizontal',
      });

      gameBoard.placeShip({
        ship: createShip(shipTypes.CRUISER),
        coordinates: { x: 5, y: 2 },
        orientation: 'vertical',
      });

      expect(gameBoard.isGameOver()).toBe(false);

      // A bunch of misses and a hit.
      gameBoard.uncoverCell({ x: 3, y: 4 });
      gameBoard.uncoverCell({ x: 5, y: 2 });
      gameBoard.uncoverCell({ x: 9, y: 2 });
      gameBoard.uncoverCell({ x: 6, y: 3 });

      expect(gameBoard.isGameOver()).toBe(false);

      // All remaining hits.
      gameBoard.uncoverCell({ x: 4, y: 2 });
      gameBoard.uncoverCell({ x: 3, y: 2 });
      gameBoard.uncoverCell({ x: 5, y: 3 });
      gameBoard.uncoverCell({ x: 5, y: 4 });

      expect(gameBoard.isGameOver()).toBe(true);
    });
  });
});
