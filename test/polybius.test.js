// Write your tests here!
const polybiusModule = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius() tests", () => {
  describe("encypting the message", () => {
    it("should encrypt the message using the polybius system", () => {
      const actual = polybiusModule.polybius("hello", true);
      const expected = "3251131343";
      expect(actual).to.equal(expected);
    });
    it("should keep the same output regardless of capitalizations", () => {
      const actual = polybiusModule.polybius("KiNg", true);
      const expected = "52423322";
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces and be able to accurately encrypt 'I' and 'J'", () => {
      const actual = polybiusModule.polybius("jump into the night");
      const expected = "42542353 42334443 443251 3342223244";
      expect(actual).to.equal(expected);
    });
  });
  describe("decrypting the message", () => {
    it("should accurately decrypt the message", () => {
      const actual = polybiusModule.polybius("3251131343", false);
      const expected = "hello";
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces and be able to accurately encrypt 'I' and 'J'", () => {
      const actual = polybiusModule.polybius(
        "42542353 42334443 443251 3342223244",
        false
      );
      const expected = "(i/j)ump (i/j)nto the n(i/j)ght";
      expect(actual).to.equal(expected);
    });
  });
});
