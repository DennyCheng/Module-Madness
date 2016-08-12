// function randomWholeNumber(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

exports.randomNumber = function(min,max){
  return Math.floor(Math.random()*(max-min)+min);
};
