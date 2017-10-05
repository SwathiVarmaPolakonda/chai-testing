var exports = (module.exports = {});

exports.palindrome = function(str) {
  if (
    str
      .split("")
      .reverse()
      .join("") === str
  ) {
    return str;
  }
};
