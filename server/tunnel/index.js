'use strict';

var net         = require('net'),
    when        = require('when'),
    responder   = require('../../common/response');

var usingHost,
    connected = false,
    connectedTunnel = null;

var ping = function(repository) {
    return when.promise(function(resolve,reject) {
        create().then(function(client, listener) {
            client.write('Hello World;'); //write the data to the tunnel
            console.log('wrote the data');
            //now listen for the proper response
            client.on('end', function() {
                console.log('ended');
                connected = false;
                client.end();
            });
            client.on('data', function(data) {
                console.log('recieved data');
                responder.addPacket(data.toString());
            });
        })
    });
}

var closeConnection = function() {
    connected = false;
    connectedTunnel = null;
    console.log('Connection with ' + host + ' was terminated');
    try {
        connectedTunnel.end();
    } catch (err) {

    }
}

var create = function() {
    return when.promise(function(resolve,reject) {
        var opts = {port: 1563,host: usingHost};
        if (!connected)
            var client = net.connect(opts,function(listener) {
                connected = true;
                connectedTunnel = client;
                resolve(client, listener);
            });
        else resolve(connectedTunnel);
    });
}

var Tunnel = function(host) {
    usingHost = host;

    responder.onFullResponse(function(packet) {
       console.log('we recieved this full message: ' + packet);
    });

    return {ping:ping, close: closeConnection};

}

module.exports = Tunnel;