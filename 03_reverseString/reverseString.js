const reverseString = function(string) {
  let array = [];
  let i = 0;
  let finalString = '';
  while (array.length < string.length) {
    array[i] = string.substr(i, 1);
    i++;
  }
  array.reverse();
  array.forEach(letter => {
    finalString += letter;
  });
  return finalString;
};

// Do not edit below this line
module.exports = reverseString;
