'use strict';

var http = require('http');

http.createServer(function (req, res) {
    console.log(req);
    res.end('Thanks Git\n');
}).listen(80);
console.log('Server running');