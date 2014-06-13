'use strict';

var when        = require('when');

/**
 * This file is used as a dispatcher
 * And a data parser
 * and other things like that
 * @param command String to try to be parsed as a command
 */

var RegEx = new RegExp("([^ ]+)( ([^ ]+))*;")

var dispatch = function(cmd, args) {
    return when.promise(function(resolve,reject) {
        require('./pull')(function(str) {
           resolve(str);
        });
    });
}

module.exports = function(command) {
    return when.promise(function(resolve,reject) {

        var parsed = command.match(RegEx);
        var args = [];
        for (var x in parsed) {
            if (x == 0) continue;
            if (x == 2) continue;
            if (x == 1) command = parsed[x].toLowerCase();
            else {
                if (parsed[x].trim) {
                    args.push(parsed[x].trim().toLowerCase());
                }
                else break;
            }
        }

        console.log("Executing command: " + command);

        dispatch(command,args).then(function(returnValue) {
           resolve(returnValue);
        });
    })

}