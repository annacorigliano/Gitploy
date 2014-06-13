'use strict';

var express         = require('express'),
    bodyparser      = require('body-parser'),
    when            = require('when'),
    tunnel          = require('./tunnel');

module.exports.start = function(conf) {

    return when.promise(function(resolve,reject) {

        var app = express();
        app.use(bodyparser());

        app.post('/:app/receive', function(req, res){
            var appName = req.params.app;
            var data = req.body;
            res.end('Thanks git.'); //we got the data we need from git don't hang it up
            //we would normally get configuration data for posted app and check it against the secret
            // @todo

            if (true) {
                //now we do this
                var Tunnel = tunnel('localhost');
                Tunnel.ping("Thanks git;").then(function() {
                    Tunnel.close();
                });
            }

        });

        try {
            if (conf.isTesting) app.listen(7357);
            else app.listen(80);
            resolve(app);
        } catch (err) {
            reject(err);
        }

    });

}