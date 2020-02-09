export const capitalize = (input) => {
  if (typeof input !== 'string') {
    return input;
  }

  const firstLetter = input.charAt(0).toUpperCase();
  const restOfInput = input.slice(1).toLowerCase();

  return `${firstLetter}${restOfInput}`;
};
