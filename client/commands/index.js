'use strict';

var when        = require('when');

/**
 * This file is used as a dispatcher
 * And a data parser
 * and other things like that
 * @param command String to try to be parsed as a command
 */

module.exports = function(command) {
    return when.promise(function(resolve,reject) {
        console.log(command);
        resolve(command);
    })

}