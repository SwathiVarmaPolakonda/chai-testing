var chai = require("chai");
var expect = chai.expect;

var { array } = require("../array");
var assert = require("assert");
describe("Array", function() {
  it("should reverse the elements of array", function() {
    assert.deepEqual(array([1, 4, 3, 2]), [2, 3, 4, 1]);
    //expect(array([1, 4, 3, 2])).to.deep.equal([2, 3, 4, 1]);
  });
});
