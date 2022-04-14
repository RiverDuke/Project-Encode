// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const original = [
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
  // Effective helper function that returns true if there is repeating characters in the string
  function repeatingTest(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string.indexOf(string[i]) !== string.lastIndexOf(string[i])) {
        count++;
      }
    }
    return count > 0;
  }

  function substitution(input, alphabet, encode = true) {
    const cased = input.toLowerCase();
    const output = [];

    // Error handling of incorrect alphabet input
    if (!alphabet || repeatingTest(alphabet) || alphabet.length !== 26) {
      return false;
    }

    // Sorts the input based upon the given alphabet
    if (encode) {
      for (let char of cased) {
        if (char === " ") {
          output.push(char);
          continue;
        }
        output.push(alphabet[original.indexOf(char)]);
      }
      return output.join("");
    }

    // Decodes the input when false is passed into the function
    else {
      for (let char of cased) {
        if (char === " ") {
          output.push(char);
          continue;
        }
        output.push(original[alphabet.indexOf(char)]);
      }
      return output.join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
