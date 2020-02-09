const getAverage = (numbers) => numbers.reduce((sum, number) => sum + number, 0) / numbers.length;

export const analyze = (numbers) => ({
  average: Math.round(getAverage(numbers)),
  min: Math.min(...numbers),
  max: Math.max(...numbers),
  length: numbers.length,
});
