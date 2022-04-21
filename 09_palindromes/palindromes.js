const palindromes = function (string) {

  string = string.toLowerCase().replace(/[^a-z0-9]+/g, '');

  string.replace("!", "");
  string.replace(" ", "");
  let reverse = reverseString(string);

  return reverse == string ? true : false;
};

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
module.exports = palindromes;
