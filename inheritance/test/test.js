var chai = require("chai");
var expect = chai.expect;

var { inheritance } = require("../inherit");
var assert = require("assert");
describe("Inheritance", function() {
  it("Should calculate area of rectangle and square", function() {
    assert.equal(area(3, 4), 12);
  });
});
