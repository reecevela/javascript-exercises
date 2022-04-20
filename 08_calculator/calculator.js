const add = function(a, b) {
	return (a+b);
};

const subtract = function(a, b) {
	return (a-b);
};

const sum = function(numbers) {
  let sum = 0;
	numbers.forEach(number => {
    sum += number;
  });
  return sum;
};

const multiply = function(numbers) {
  let total = 1;
  numbers.forEach(number => {
    total *= number;
  });
  return total;
};

const power = function(a,b) {
	return (a**b)
};

const factorial = function(number) {
  if (number > 0){
    let total = 1;
    while (number > 0) {
      total *= number--;
    }
    return total;
  } 
  return 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
