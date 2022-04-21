const fibonacci = function(index) {
  let engine;
  let trainCar = 1;
  let caboose = 0;

  while (index > 0) {
    engine = trainCar + caboose;
    console.log("engine is " + engine);
    //console.log("trainCar is " + trainCar);
    //console.log("caboose is " + caboose);
    caboose = trainCar;
    trainCar = engine;
    if (--index <= 1) {
      return engine;
    }
  }
  return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
