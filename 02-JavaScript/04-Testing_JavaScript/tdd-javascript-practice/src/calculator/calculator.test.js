import {
  add, substract, divide, multiply,
} from './calculator';

describe('Tests for calculator', () => {
  it('should add two numbers', () => {
    expect(add(1, 1)).toBe(2);
  });

  it('should add decimal numbers', () => {
    expect(add(3.4, 2.53)).toBeCloseTo(5.93);
  });

  it('should add negative numbers', () => {
    expect(add(-5, -8)).toBeCloseTo(-13);
  });

  it('should substract two numbers', () => {
    expect(substract(5, 1)).toBe(4);
  });

  it('should substract two equal numbers', () => {
    expect(substract(1, 1)).toBe(0);
  });

  it('should substract decimal numbers', () => {
    expect(substract(25.33, 1.11)).toBeCloseTo(24.22);
  });

  it('should substract negative numbers', () => {
    expect(substract(-25.33, -1.11)).toBe(-24.22);
  });

  it('should divide two numbers', () => {
    expect(divide(20, 5)).toBe(4);
  });

  it('should divide decimal numbers', () => {
    expect(divide(20.4, 5.1)).toBe(4);
  });

  it('should handle division by zero', () => {
    expect(divide(20, 0)).toBe(Infinity);
  });

  it('should divide negative numbers', () => {
    expect(divide(-20, 10)).toBe(-2);
  });

  it('should multiply two numbers', () => {
    expect(multiply(5, 4)).toBe(20);
  });

  it('should multiply two decimal numbers', () => {
    expect(multiply(5.2, 2)).toBe(10.4);
  });

  it('should multiply by zero', () => {
    expect(multiply(10, 0)).toBe(0);
  });

  it('should multiply two negative numbers', () => {
    expect(multiply(-5.2, 2)).toBe(-10.4);
  });
});
