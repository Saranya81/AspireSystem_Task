var express = require('express');
var path = require('path');
var router = express();

router.get('/', function(req, res) {
    res.sendFile(__dirname + "/routing.html");
});

router.get('/youtube', function(req, res) {
    res.redirect('https://www.youtube.com');
});

router.listen(3000);
