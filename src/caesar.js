// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function caesar(input, shift, encode = true) {
    // error handling of shift
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;

    // accounts for 'true' or 'false' encode boolean
    let shifted = 0;
    if (encode === true) {
      shifted += shift;
    } else {
      shifted -= shift;
    }

    const output = [];
    const base = input.toLowerCase();
    for (let letter of base) {
      if (!alphabet.some((search) => letter === search)) {
        // accounts for special characters
        output.push(letter);
        continue;
      }

      const index = alphabet.indexOf(letter);
      const encoded = index + shifted;

      // shifts the message, while accounting for going past 'z' and 'a'
      if (encoded < 0) {
        const belowA = alphabet.length + encoded;
        output.push(alphabet[belowA]);
      } else if (encoded >= alphabet.length) {
        const aboveZ = encoded - alphabet.length;
        output.push(alphabet[aboveZ]);
      } else {
        output.push(alphabet[encoded]);
      }
    }

    return output.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
