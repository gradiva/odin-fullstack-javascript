const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseAlphabet = lowerCaseAlphabet.toUpperCase();

// https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
const mod = (a, n) => ((a % n) + n) % n;

const shiftCharByCharset = ({ char, shiftFactor, charset }) => {
  const index = charset.indexOf(char);

  if (index !== -1) {
    const newIndex = mod(index + shiftFactor, charset.length);

    return charset[newIndex];
  }

  return undefined;
};

export const caesarCipher = (input, shiftFactor = 1) => {
  const chars = input.split('');
  const shiftedChars = chars.map((char) => (
    shiftCharByCharset({ char, shiftFactor, charset: lowerCaseAlphabet })
    || shiftCharByCharset({ char, shiftFactor, charset: upperCaseAlphabet })
    || char
  ));

  return shiftedChars.join('');
};
