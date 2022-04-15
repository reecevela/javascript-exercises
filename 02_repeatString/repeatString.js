const repeatString = function(str = '', loops = 0) {
  let finalString = '';

  str.toString();

  while (loops > 0) {
    finalString += str;
    loops--;
  }

  return (loops < 0 ? 'ERROR' : finalString);
};

// Do not edit below this line
module.exports = repeatString;
