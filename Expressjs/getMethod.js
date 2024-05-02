//  // title : Expressjs
// //Author :Saranya
// //Created date:02-05-2024
// // last modified:02-05-2024
// GET -method
var express=require("express");
var getMethod=express();

getMethod.get('/',function(req,res){
    res.sendFile(__dirname +"/index._get.html");
});
// submit button action
getMethod.get('/home',function(req,res){
  res.send('<h1>Welcome'+req.query['username']+'<h1><br><h2>Mail ID:'+req.query['mailid']+'</h2>');

});
getMethod.listen(3000);

