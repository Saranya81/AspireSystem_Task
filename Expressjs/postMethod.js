//postMethod-for encryption 

var express=require("express");
var postMethod=express();
var bodyParser=require('body-parser');// to get encrypted details
var urlencodedParser=bodyParser.urlencoded({ extended: false}) 

postMethod.use(urlencodedParser);
postMethod.get('/',function(req,res){
    res.sendFile(__dirname +"/index_post.html");
});

postMethod.post('/home',function(req,res){
  res.send('<h1>Welcome'+req.body.username+'<h1><br><h2>Mail ID:'+req.body.mailid+'</h2>');

});
postMethod.listen(3000);