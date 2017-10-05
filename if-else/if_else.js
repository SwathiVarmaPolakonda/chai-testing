var exports = (module.exports = {});

exports.if_else = function(score) {
  if (score <= 5) {
    return "F";
  } else if (score <= 10) {
    return "E";
  } else if (score <= 15) {
    return "D";
  } else if (score <= 20) {
    return "C";
  } else if (score <= 25) {
    return "B";
  } else return "A";

  return grade;
};
