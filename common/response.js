'use strict';

var packets = [],
    callbacks = [],
    workingBundle = [];

var maybeEmit = function(latest) {

    if (latest.indexOf(";") == latest.length - 1) {
        var response = workingBundle.join('');
        var numberOfCallbacks = callbacks.length,
            currentIteration = 1;

        if (callbacks.length > 0)
            for (var y in callbacks) {
                callbacks[y](response);
                if (currentIteration == numberOfCallbacks) {
                    for (var x in workingBundle) {
                        packets.push(workingBundle[x]);
                    }
                    workingBundle = [];
                } else currentIteration++;
            }
        else {
            workingBundle = [];
        }

    }

}

module.exports.addPacket = function(string) {

    //add strings to the array
    workingBundle.push(string);
    maybeEmit(string);

}

module.exports.onFullResponse = function(next) {

    //add callbacks to the array
    callbacks.push(next);

}