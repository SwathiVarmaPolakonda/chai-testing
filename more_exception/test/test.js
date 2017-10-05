var chai = require("chai");
var expect = chai.expect;

var { more_exception } = require("../exception");
var assert = require("assert");
describe("Exceptions", function() {
  it("should return integer result of n power p. If either n or p is negative, then the method must throw an exception with message: n and p should be non-negative", function() {
    expect(more_exception(2, 4)).to.throw;
  });
});
