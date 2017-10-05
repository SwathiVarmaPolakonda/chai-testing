var chai = require("chai");
var expect = chai.expect;

var { diff } = require("../diff");
var assert = require("assert");
describe("Differnce", function() {
  it("should check each element in the array and finds the maximum difference between any 2 elements", function() {
    expect(diff([1, 6, 2, 5])).to.equal(5);
    //assert.equal(diff([1, 2, 5]), 4);
  });
});
