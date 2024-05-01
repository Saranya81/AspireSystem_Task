// // USing nodemon module
console.log("hello")
console.log("Welcome ")
console.log("helo")

// read,write,append,open,rename the file 
var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
    fs.writeFile('demo.txt',"This is the sample document for read,write and append the file. ",function(err){
        if(err){
            return console.error(err);
        }
        else{
        console.log("Successfully appended content to the file");
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Success');
        }
    });
    fs.readFile('demo.txt',function(err,data){
        if(err){
            return console.error(err);
        }
        console.log("Async data:"+ data.toString());
        res.write(data);
        res.end();
    });
    fs.appendFile('demo.txt',"Appending file",function(err){
        if(err){
            return console.error(err);
        }
        else{
        console.log("Successfully appended content to the file");
            res.writeHead(200, {'Content-Type': 'text/plain'});
            // res.end('Success');
        }
    });
    fs.rename("demo.txt",'sample.txt',function(err){
        if(err){
            return console.error(err);
        }
        else{
        console.log("Successfully renamed file");
            res.writeHead(200, {'Content-Type': 'text/plain'});
             res.end('Success');
        }
    });
    fs.open('newfile.txt','w+',function(err){
        if(err){
            return console.error(err);
        }
        else{
        console.log("Successfully renamed file");
            res.write("File opened successfully");
             res.end();
        }
    });

}).listen(5000);



