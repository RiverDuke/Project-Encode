const substitutionModule = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution() Tests", () => {
  describe("handling errors", () => {
    it("should return false if alphabet characters are repeating", () => {
      const actual = substitutionModule.substitution(
        "What a beatiful day it is today",
        "ababababababegegegegegegeg",
        true
      );
      const expected = false;
      expect(actual).to.equal(expected);
    });
    it("should return false if the alphabet isnt 26 characters long", () => {
      const actual = substitutionModule.substitution(
        "What a wonderful world",
        "adfghteuo",
        true
      );
      const expected = false;
      expect(actual).to.equal(expected);
    });
  });
  describe("encrypting a message (true)", () => {
    it("should encrypt the message by substituting the alphabet with the given alphabet", () => {
      const actual = substitutionModule.substitution(
        "apple",
        "mnbvcxzasdfghjklpoiuytrewq",
        true
      );
      const expected = "mllgc";
      expect(actual).to.equal(expected);
    });
    it("should ignore all capital letters", () => {
      const actual = substitutionModule.substitution(
        "THaNk YoU",
        "qwertyuioplkjhgfdsazxcvbnm"
      );
      const expected = "ziqhl ngx";
      expect(actual).to.equal(expected);
    });
    it("should properly maintain spaces while encrypting the message", () => {
      const actual = substitutionModule.substitution(
        "thank you",
        "qwertyuioplkjhgfdsazxcvbnm"
      );
      const expected = "ziqhl ngx";
      expect(actual).to.equal(expected);
    });
  });
  describe("decrypting the message (false)", () => {
    it("should decrypt the given code by reversing the substitution method", () => {
      const actual = substitutionModule.substitution(
        "mllgc",
        "mnbvcxzasdfghjklpoiuytrewq",
        false
      );
      const expected = "apple";
      expect(actual).to.equal(expected);
    });
    it("should properly maintain spaces while decrypting the message", () => {
      const actual = substitutionModule.substitution(
        "ziqhl ngx",
        "qwertyuioplkjhgfdsazxcvbnm",
        false
      );
      const expected = "thank you";
      expect(actual).to.equal(expected);
    });
    it("should ignore all capital letters", () => {
      const actual = substitutionModule.substitution(
        "ZiQhl NgX",
        "qwertyuioplkjhgfdsazxcvbnm",
        false
      );
      const expected = "thank you";
      expect(actual).to.equal(expected);
    });
  });
});
