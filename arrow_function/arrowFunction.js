var exports = (module.exports = {});

exports.arrowfunc = function(arr) {
  var n;
  return arr.map(n => {
    if (n % 2 == 0) {
      return n * 2;
    } else {
      return n * 3;
    }
  });
};
