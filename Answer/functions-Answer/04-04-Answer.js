let getTip = function (total, tipPercent = 0.2) {
  return total * tipPercent;
};

let tip = getTip(40, 0.25);
console.log(tip);
