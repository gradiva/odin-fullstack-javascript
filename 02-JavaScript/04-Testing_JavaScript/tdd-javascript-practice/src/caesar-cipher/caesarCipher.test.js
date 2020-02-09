import { caesarCipher } from './caesarCipher';

describe('Tests for caesar cipher', () => {
  it('should return the correct encryption', () => {
    expect(caesarCipher('LeticiA is alSo a StriNg!', 1))
      .toBe('MfujdjB jt bmTp b TusjOh!');
  });

  it('should work with a single letter', () => {
    expect(caesarCipher('a', 1)).toBe('b');
  });

  it('should not change the case', () => {
    expect(caesarCipher('Aa', 3)).toBe('Dd');
  });

  it('should return the next in the alphabet', () => {
    expect(caesarCipher('Z', 1)).toBe('A');
  });

  it('should work with negative shift', () => {
    expect(caesarCipher('Test', -5)).toBe('Ozno');
  });

  it('should ignore non alphabetic characters', () => {
    expect(caesarCipher(',?', 5)).toBe(',?');
  });
});
