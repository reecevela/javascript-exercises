const ftoc = function(temp) {
  let roundAmount = 
  temp = (temp - 32)*5/9;

  temp = temp*10;
  switch (temp >= 0) {
    case true:
      temp = (temp % 1 > 0.5 ? Math.ceil(temp) : Math.floor(temp));
      break;
    case false:
      temp = (temp % 1 > -0.5 ? Math.ceil(temp) : Math.floor(temp));
      break;
  }
  temp = temp/10;

  return temp;
};

const ctof = function(temp) {
  temp = (temp*9/5)+32;
  //return (temp % 1 > 0.5 ? Math.ceil(temp) : Math.floor(temp));

  temp = temp*10;
  switch (temp >= 0) {
    case true:
      temp = (temp % 1 > 0.5 ? Math.ceil(temp) : Math.floor(temp));
      break;
    case false:
      temp = (temp % 1 > -0.5 ? Math.ceil(temp) : Math.floor(temp));
      break;
  }
  temp = temp/10;

  return temp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
