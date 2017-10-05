var chai = require("chai");
var expect = chai.expect;

var { int_add } = require("../datatypes");
var assert = require("assert");

describe("Datatypes", function() {
  it("should return 16 when 12 and 4 are added", function() {
    assert.equal(int_add(12, 4), 16);
  });

  it("should return 8.0 when 4.0 and 4.0 are added", function() {
    assert.equal(int_add(4.0, 4.0), 8.0);
  });

  it("should return HackerRank is the best place to learn and practice coding! when HackerRank and is the best place to learn and practice coding! are added", function() {
    // expect(
    //   int_add("HackerRank", "is the best place to learn and practice coding!")
    // ).to.equal("HackerRank is the best place to learn and practice coding!");
    // assert.equal(
    //   int_add("HackerRank", "is the best place to learn and practice coding!"),
    //   "HackerRank is the best place to learn and practice coding!"
    // );
  });
});
