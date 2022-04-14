// Write your tests here!
const caesarModule = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar() tests written by Team 5", () => {
  describe("input error handling", () => {
    const expected = false;
    it("should return false if shift is equal to 0", () => {
      const actual = caesarModule.caesar("Hello World", 0, (encode = true));
      expect(actual).to.equal(expected);
    });
    it("should return false if shift is not provided", () => {
      const actual = caesarModule.caesar("Good Bye World");
      expect(actual).to.equal(expected);
    });
    it("should return false if shift is greater than 25", () => {
      const actual = caesarModule.caesar("Zebra Cookies", 100);
      expect(actual).to.equal(expected);
    });
    it("should return false if shift is less than -25", () => {
      const actual = caesarModule.caesar("Candy land", -100);
      expect(actual).to.equal(expected);
    });
  });
  describe("encrypt the message", () => {
    it("should properly encyrpt the message by shifting its letter", () => {
      const actual = caesarModule.caesar("spring", 3, true);
      const expected = "vsulqj";
      expect(actual).to.equal(expected);
    });
    it("should keep the same output regardless of capitalizations", () => {
      const actual = caesarModule.caesar("SPriNG", 3, true);
      const expected = "vsulqj";
      expect(actual).to.equal(expected);
    });
    it("should loop to the start of the alphabet when going past z", () => {
      const actual = caesarModule.caesar("texas", 5, true);
      const expected = "yjcfx";
      expect(actual).to.equal(expected);
    });
    it("should loop to the end of the alphabet when given a negative shift value that goes past a", () => {
      const actual = caesarModule.caesar("apple", -6, true);
      const expected = "ujjfy";
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces and should output correctly when given a negative shift value", () => {
      const actual = caesarModule.caesar("aPples Are good", -4, true);
      const expected = "wllhao wna ckkz";
      expect(actual).to.equal(expected);
    });
    it("should be able to decrypt a given string (shift in the opposite direction) when 'false' is past into the function", () => {
      const actual = caesarModule.caesar("wllhao wna ckkz", -4, false);
      const expected = "apples are good";
      expect(actual).to.equal(expected);
    });
  });
});
