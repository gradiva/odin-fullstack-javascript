export const reverseString = (input) => {
  if (typeof input !== 'string') {
    return input;
  }

  return input.split('').reverse().join('');
};
