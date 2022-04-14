// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const polybiusTable = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  // Helper function used to swap an objects keys with its values
  function inverse(obj) {
    const swapped = {};
    for (let key in obj) {
      swapped[obj[key]] = key;
    }
    return swapped;
  }

  function polybius(input, encode = true) {
    const output = [];

    if (encode) {
      const diveded = input.toLowerCase().split(""); //converts the input to numbers useing the polybius table
      for (let val of diveded) {
        if (val === " ") {
          output.push(val);
          continue;
        }
        output.push(polybiusTable[val]);
      }
      return output.join("");
    }
    // converts the numbers to letters when false is passed into the function
    else {
      let oddcheck = input.replace(" ", ""); // returns false if total input numbers are odd
      if (!(oddcheck.length % 2 == 0)) {
        return false;
      }

      // splits the given input into two digit numbers and accounts for spaces
      const numArr = [];
      for (let i = 0; i < input.length; i += 2) {
        if (input[i] === " ") {
          numArr.push(input[i]);
          i--;
          continue;
        }
        numArr.push(input[i] + input[i + 1]);
      }

      const reversed = inverse(polybiusTable); // when using reversed, 42 does not translate correctly and needs to be acounted for

      for (let num of numArr) {
        if (num === " ") {
          output.push(num); // acounts for 42 and spaces, decodes the input into numbers
          continue;
        }
        if (num == 42) {
          output.push("(i/j)");
        } else {
          output.push(reversed[num]);
        }
      }

      return output.join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
