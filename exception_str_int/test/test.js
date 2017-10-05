var chai = require("chai");
var expect = chai.expect;

var { str_int } = require("../str_int");
var assert = require("assert");
describe("String-to-integer and exception handling", function() {
  it("should read string, S, and print its integer value; if S cannot be converted to an integer, print Bad String", function() {
    //assert.equal(str_int("abc"), "Bad String");
    //  expect(str_int(5)).to.throw;
    expect(str_int("za")).to.throw;
  });
});
