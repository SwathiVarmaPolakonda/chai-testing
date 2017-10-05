var chai = require("chai");
var expect = chai.expect;

var { reg1 } = require("../reg1");
var assert = require("assert");
describe("Regular Expression", function() {
  it("Regular Expression", function() {
    expect(reg1("bcd")).to.equal(false);
  });
});
