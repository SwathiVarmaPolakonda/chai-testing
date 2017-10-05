var exports = (module.exports = {});

exports.sort = function(arr) {
  var numSwaps = 0;
  for (var i = 0; i < n; i++) {
    var temp = 0;
    for (var j = 0; j < n - 1; j++) {
      temp = a[j];
      if (a[j] > a[j + 1]) {
        a[j] = a[j + 1];
        a[j + 1] = temp;
        numSwaps++;
      }
    }
    if (numSwaps == 0) {
      break;
    }
  }
  return numSwaps;
  return a[0];
  return a[n - 1];
};

// arr.sort(function(a, b) {
//   return b - a;
//   console.log("First Element: " + a[0]);
//   console.log("Last Element: " + a[n - 1]);
// });
