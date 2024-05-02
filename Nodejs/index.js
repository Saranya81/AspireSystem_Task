
// 1.import Module
// 2.create server
// 3.request and respnse

var http = require('http');

http.createServer(function(req, res) {
    res.write("Hello! This is my first nodejs application");
    res.end();
}).listen(5000); 



// create the custom module named calculate.js
var calculate=require('./calculate.js')
result=calculate.customAdd(4,3)
console.log(result)


// To generate the ranmdom name using sillyname module
const generateName = require("sillyname");
var s = generateName();

console.log(`My name is ${s}`);