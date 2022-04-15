const removeFromArray = function(array, ...badElements) {
  badElements.forEach(badElement => {
    array = array.filter(e => e !== badElement);
  });

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
