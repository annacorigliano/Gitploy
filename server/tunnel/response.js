'use strict';

var packets = [],
    callbacks = [],
    workingBundle = [];

var maybeEmit = function(latest) {

    if (latest == "\n") {
        var response = workingBundle.join('');
        var numberOfCallbacks = callbacks.length,
            currentIteration = 1;

        for (var y in callbacks) {
            callbacks[y](response);
            if (currentItereation == numberOfCallbacks) {
                for (var x in workingBundle) {
                    packets.push(workingBundle[x]);
                }
                workingBundle = [];
            } else currentIteration++;
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