import { capitalize } from './capitalize';

describe('Tests for capitalize', () => {
  it('should capitalize lowercase to uppercase', () => {
    expect(capitalize('leticia')).toBe('Leticia');
  });

  it('should capitalize uppercase to lowercase', () => {
    expect(capitalize('LETICIA')).toBe('Leticia');
  });

  it('should capitalize lowercase and uppercase', () => {
    expect(capitalize('lETiCIA')).toBe('Leticia');
  });

  it('should capitalize a whole sentence', () => {
    expect(capitalize('LETICIA is MOldening her profile')).toBe('Leticia is moldening her profile');
  });

  it('should handle empty strings', () => {
    expect(capitalize('')).toBe('');
  });

  it('should handle non letter characters', () => {
    expect(capitalize('12345678')).toBe('12345678');
  });
});
