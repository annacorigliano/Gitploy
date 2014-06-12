'use strict';

var express         = require('express'),
    bodyparser      = require('body-parser'),
    when            = require('when');

module.exports.start = function() {

    return when.promise(function(resolve,reject) {

        var app = express();
        app.use(bodyparser());

        app.post('/:app/recieve', function(req, res){
            var appName = req.params.app;
            var data = req.body;

            res.end('Thanks git.');
        });

        try {
            app.listen(80);
            resolve(app);
        } catch (err) {
            reject(err);
        }

    });

}