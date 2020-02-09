import { reverseString } from './reverseString';

describe('Tests for reverseString', () => {
  it('should reverse a word', () => {
    expect(reverseString('leticia')).toBe('aicitel');
  });

  it('should reverse a whole sentence', () => {
    expect(reverseString('leticia is testing')).toBe('gnitset si aicitel');
  });

  it('should handle empty strings', () => {
    expect(reverseString('')).toBe('');
  });
});
