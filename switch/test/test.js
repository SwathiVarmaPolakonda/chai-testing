var chai = require("chai");
var expect = chai.expect;

var { switchcase } = require("../switchcase");
var assert = require("assert");
describe("Switch case", function() {
  it("should return A, B, C, D depending on criteria 1.If the first character in string  is in the set {a,e,i,o,u}, then return A. 2.If the first character in string  is in the set {b,c,d,f,g}, then return B. 3. If the first character in string  is in the set {h,j,k,l,m}, then return C. If the first character in string  is in the set {n,p,q,r,s,t,v,w,x,y,z}, then return D.", function() {
    assert.equal(switchcase("adfgt"), "A");
  });
});
