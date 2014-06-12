'use strict';

var Server          = require('./server'),
    util            = require('./common'),
    client          = require('./client');

Server.start().then(function(app) {
    //we have the express server here to add additional routes or whatever
});