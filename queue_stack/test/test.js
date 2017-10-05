var chai = require("chai");
var expect = chai.expect;

var { palindrome } = require("../palindrome");
var assert = require("assert");
describe("Palindrome", function() {
  it("should check whether the given string is palindrome or not", function() {
    //expect(palindrome("racecar")).to.equal("racecar");
    assert.equal(palindrome("racecar"), "racecar");
  });
});
