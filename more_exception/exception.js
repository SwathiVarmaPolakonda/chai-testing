var exports = (module.exports = {});

exports.more_exception = function() {
  this.power = function(n, p) {
    try {
      if (n < 0 || p < 0) throw "n and p should be non-negative";
      return Math.pow(n, p);
    } catch (e) {
      return e;
    }
  };
};
