var randomNum = require('./module.js');
//this is a module not a function
var numConvert = require('./convert.js');


exports.combine = function(){
  var value = randomNum.randomNumber(100,1000000);
  var balance = numConvert.convertNumber(value);
  //grab the car and make it drive!
  return balance
};
