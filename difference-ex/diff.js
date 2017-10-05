var exports = (module.exports = {});

exports.diff = function(a) {
  let sorted = a.sort((a, b) => a - b);
  let max = a[a.length - 1];
  let min = a[0];
  return max - min;
};
