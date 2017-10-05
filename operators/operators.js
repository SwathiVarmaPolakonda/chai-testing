var exports = (module.exports = {});
exports.operators = function(mealCost, tipPercent, taxPercent) {
  var mealCost;
  var tipPercent;
  var taxPercent;
  var tip = mealCost * (tipPercent / 100);
  var tax = mealCost * (taxPercent / 100);
  var totalCost = mealCost + tip + tax;
  var cost = Math.round(totalCost);
  //console.log(cost);
  return cost;
};
