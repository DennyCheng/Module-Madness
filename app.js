var http = require('http');
// var randomNum = require('./module.js');
// var numConvert = require('./convert.js');
var methods = require('./combine.js');

http.createServer(function(req,res){
  res.writeHead(200);

  // res.write(randomNum(100,1000000)+ '\n');
  // res.write(numConvert(1003909)+'\n');

  res.write(methods.combine());
  //calling the module, the function within it.



res.end();

}).listen(3000);

console.log("this is working");
