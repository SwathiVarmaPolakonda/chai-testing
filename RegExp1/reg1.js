var exports = (module.exports = {});

exports.reg1 = function() {
  let re = new RegExp(/^([aeiou]).*\1$/);

  return re;
};
