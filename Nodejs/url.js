// host a simple website locally using Node.js using url module.


var http=require("http");
var fs=require("fs");
var url=require('url');// to split the web address as pathname,host nmae ,query
http.createServer(function(req,res){
    var weblink=url.parse(req.url,true);
    var filepath="."+weblink.pathname;
    fs.readFile(filepath,function(err,data){
        if(err){
            res.writeHead(404,{'Content-type':'text/html'});
            return res.end("404 file not found");
        }
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        res.end();
    });

}).listen(8000);

// to run this html file we want to give http://localhost:8000/website.html