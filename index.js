'use strict';

var express = require('express');
var app = express();

app.post('/:app/recieve', function(req, res){
    console.log('request coming in');
    console.log(req.query)
    res.end('Thanks git.');
});

app.listen(80);

console.log('Listening');