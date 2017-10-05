var chai = require("chai");
var expect = chai.expect;

var { operators } = require("../operators");
var assert = require("assert");
describe("Operators", function() {
  it("should return Total cost is totalCost dollars., where totalCost is the rounded integer result of the entire bill", function() {
    assert.equal(operators(12.0, 20, 8), 15);
    //expect(operators(12, 20, 8)).to.equal(15);
  });
});
