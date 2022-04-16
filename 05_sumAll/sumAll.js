const sumAll = function(a, b) {

  if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) {
    return 'ERROR';
  }

  let sum = 0;
  let higher;
  let lower;

  switch (a > b) {
    case true:
      higher = a;
      lower = b;
      break;
    default:
      higher = b;
      lower = a;
  }

  while (lower <= higher) {
    sum += lower++;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
