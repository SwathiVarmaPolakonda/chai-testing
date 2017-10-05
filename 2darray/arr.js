var exports = (module.exports = {});

exports.arr = function(a) {
  var highestSum = 0;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      var sum =
        arr[i + 0][j + 0] +
        arr[i + 0][j + 1] +
        arr[i + 0][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j + 0] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      if (sum > highestSum || (i == 0 && j == 0)) highestSum = sum;
    }
  }
  console.log(highestSum);
};
