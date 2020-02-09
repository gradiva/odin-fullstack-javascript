export const shipTypes = {
  BATTLESHIP: 'BATTLESHIP',
  CRUISER: 'CRUISER',
  DESTROYER: 'DESTROYER',
  SUBMARINE: 'SUBMARINE',
};

const lengthByShipType = {
  [shipTypes.BATTLESHIP]: 4,
  [shipTypes.CRUISER]: 3,
  [shipTypes.DESTROYER]: 2,
  [shipTypes.SUBMARINE]: 1,
};

export const createShip = (shipType) => {
  if (!shipTypes[shipType]) {
    throw new Error(`Invalid ship type: ${shipType}`);
  }

  return {
    shipType,
    length: lengthByShipType[shipType],
  };
};
