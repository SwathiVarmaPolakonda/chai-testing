var chai = require("chai");
var expect = chai.expect;

var { inheritance } = require("../inherit");
var assert = require("assert");
describe("Inheritance", function() {
  it("Should return 12", function() {
    assert.equal(area(3, 4), 12);
  });
});
