var exports = (module.exports = {});

exports.str_int = function(a) {
  try {
    let n = eval(a);
    console.log(n);
  } catch (e) {
    console.log("Bad String");
  }
  // try {
  //   let S;
  //   var n = parseInt(S) || "Bad String";
  //   console.log(n);
  // } catch (e) {
  //   console.log(e);
  // }
};
