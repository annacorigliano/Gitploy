'use strict';

var exec = require('child_process').exec;

var Func = function(next) {
    exec('git pull origin master', function(error,stdout,stderr) {
        console.log(stderr);
        console.log(stdout);
        if (error !== null) {
            console.log("Error!");
        }
        next(stderr);
    });
}

module.exports = Func;