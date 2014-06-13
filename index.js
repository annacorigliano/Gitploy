'use strict';

var Server          = require('./server'),
    util            = require('./common'),
    Client          = require('./client'),
    colors          = require('colors');

var conf = {};

process.argv.forEach(function (val, index, array) {
    if (val == "server") conf.isServer = true;
    if (val == "--test") conf.isTesting = true;
    if (val == "client") conf.isClient = true;
});

if (conf.isServer) {
    console.log("Starting Gitploy server router...".red);
    Server.start(conf).then(function(app) {
        //we have the express server here to add additional routes or whatever
        console.log("Server started successfully".green)
        console.log("Listening");
    });

} else {
    console.log("Starting Gitploy client listener...".red);
    Client.start(conf).then(function(net) {
        console.log("Client started successfully".green);
        console.log("Listening");
    }).catch(function(err) {
        console.log(("Failed to start client: " + err).red);
    });

}