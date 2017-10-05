var chai = require("chai");
var expect = chai.expect;

var { arrowfunc } = require("../arrowFunction");
var assert = require("assert");
describe("Arrow functions", function() {
  it("should modify each element so that all even elements are multiplied by 2 and all odd elements are multiplied by 3", function() {
    //expect(arrowfunc([1, 2, 3, 4, 5])).to.equal([3, 4, 9, 8, 15]);
    assert.equal(arrowfunc([1, 2, 3, 4, 5]), [3, 4, 9, 8, 15]);
  });
});
