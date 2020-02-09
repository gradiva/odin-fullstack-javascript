import { createShip, shipTypes } from '../ship';

describe('createShip', () => {
  it('throws if called with invalid ship type', () => {
    expect(() => createShip('SOMETHING_INVALID')).toThrow();
    expect(() => createShip(shipTypes.SOMETHING_INVALID)).toThrow();
  });

  describe('getLenght', () => {
    it('should return the correct length for submarine', () => {
      const ship = createShip(shipTypes.SUBMARINE);
      expect(ship.length).toBe(1);
    });

    it('should return the correct length for destroyer', () => {
      const ship = createShip(shipTypes.DESTROYER);
      expect(ship.length).toBe(2);
    });

    it('should return the correct length for cruiser', () => {
      const ship = createShip(shipTypes.CRUISER);
      expect(ship.length).toBe(3);
    });

    it('should return the correct length for battleship', () => {
      const ship = createShip(shipTypes.BATTLESHIP);
      expect(ship.length).toBe(4);
    });
  });
});
