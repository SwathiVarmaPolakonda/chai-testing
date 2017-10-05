var chai = require("chai");
var expect = chai.expect;

var { if_else } = require("../if_else");
var assert = require("assert");
describe("If_else", function() {
  it("should return the letter corresponding to her grade a/c to rules", function() {
    assert.equal(if_else(11), "D");
  });
});
