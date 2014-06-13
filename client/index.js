'use strict';

var net             = require('net'),
    when            = require('when'),
    responder       = require('../common/response'),
    commands        = require('./commands');

module.exports.start = function(conf) {

    return when.promise(function(resolve,reject) {
        var server = net.createServer(function(socket) {
            socket.write("Connection Received");
            socket.on('data', function(data) {
                responder.addPacket(data.toString());
            });
            responder.onFullResponse(function(response) {
                try {
                    commands(response).then(function() {
                        //we're likely done here
                        console.log('we are done here');
                        socket.end();
                    });
                } catch (err) {

                }
            });
        });
        try {
            server.listen(1563);
            resolve(server);
        } catch (err) {
            reject(err);
        }
    });
}