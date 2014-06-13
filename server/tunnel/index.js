'use strict';

var net         = require('net'),
    when        = require('when'),
    responder   = require('./response');

var Tunnel = function(host) {

    this.host = host;

    var connected = false,
        connectedTunnel;

    var closeConnection = function() {
        connected = false;
        connectedTunnel = null;
        console.log('Connection with ' + host + ' was terminated');
    }

    var create = function() {
        return when.promise(function(resolve,reject) {
            if (!connected)
                net.connect({port: 1563,host: host},function(listener) {
                    connected = true;
                    connectedTunnel = net;
                    resolve(net);
                    net.on('end', closeConnection);
                });
            else resolve(connectedTunnel);
        });
    }

    responder.onFullResponse(function(packet) {
       console.log('we recieved this full message: ' + packet);
    });

    this.ping = function(repository) {
        return when.promise(function(resolve,reject) {
            create().then(function(net) {
                net.write('Hello World'); //write the data to the tunnel
                //now listen for the proper response
                net.on('data', function(data) {
                    responder.addPacket(data.toString());
                });
            })
        });
    }

    return this;

}

module.exports = Tunnel;