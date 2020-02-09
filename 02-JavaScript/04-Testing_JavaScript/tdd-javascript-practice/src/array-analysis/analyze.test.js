import { analyze } from './analyze';

describe('Tests for analyze array', () => {
  it('should return the correct values for array 1', () => {
    expect(analyze([1, 1, 2, 3, 5, 8])).toMatchObject({
      average: 3,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  it('should return the correct values for array 2', () => {
    expect(analyze([1, 5, 5, 25, 125, 3125])).toMatchObject({
      average: 548,
      min: 1,
      max: 3125,
      length: 6,
    });
  });
});
