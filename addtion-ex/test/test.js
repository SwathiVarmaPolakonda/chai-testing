//import add from '../add';
var chai = require("chai");
var expect = chai.expect;

var { add } = require("../add");
var assert = require("assert");
describe("Addition", function() {
  it("should return 6 when 2 and 4 are added", function(done) {
    assert.equal(add(2, 4), 6);
    done();
  });
  it("should return 6.1 when 2.5 and 3.6 are added", function() {
    assert.equal(add(2.5, 3.6), 6.1);
  });

  it("should return 5.6 when 2 and 3.6 are added", function() {
    assert.equal(add(2, 3.6), 5.6);
  });
  it("should return cd when c and d are added", function() {
    // assert.equal(add("c", "d"), "cd");
    expect(add("c", "d")).to.equal("cd");
  });

  it("should return Error when [1] and 2 are added", function() {
    // assert.throws(add([1], 2), Error, TypeError);
    expect(add([1], 2)).to.throw;
  });

  it("should return Error when a and [1] are added", function() {
    expect(add("a", [1])).to.throw;
  });
});
