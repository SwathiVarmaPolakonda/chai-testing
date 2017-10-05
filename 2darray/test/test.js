var chai = require("chai");
var expect = chai.expect;

var { arr } = require("../arr");
var assert = require("assert");
describe("2dArray", function() {
  it("Calculate the hourglass sum for every hourglass in A, then print the maximum hourglass sum.", function() {
    assert.equal(
      arr([
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]),
      19
    );
    //expect(arr([1, 1, 1, 1, 1, 1, 1])).to.equal(7);
  });
});
