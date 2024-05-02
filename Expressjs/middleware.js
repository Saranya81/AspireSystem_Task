var express = require('express');
var middleware = express();

middleware.use(function(req, res, next) {
    console.log('Welcome,In middleware');
    next();
});

middleware.get('/', function(req, res) {
    console.log("After middleware");
    res.end("Welcome to middleware concepts");
});

middleware.listen(5000, function() {
    console.log('Server is running on port 5000');
});

// By using middleware ,verify whether the user is already logged in before granting them access to their accounts.

var express = require('express');
var middleware = express();

function isLogin(req, res, next) {
    if (req.query.isLogin === 'true') {
        console.log("Login user");
        next(); 
    } else {
        res.send("Access Denied,Login required");
    }
}

middleware.use(function(req, res, next) {
    isLogin(req, res, next); // Call  middleware function
});

middleware.get('/', function(req, res) {
    console.log("After middleware");
    res.end("Welcome to middleware concepts");
});

middleware.listen(5000, function() {
    console.log('Server is running on port 5000');
});
