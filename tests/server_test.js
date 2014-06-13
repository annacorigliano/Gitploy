'use strict';

/*globals describe, beforeEach, it*/
var assert          = require('assert'),
    should          = require('should'),
    server          = require('../server');

describe('Server', function () {

    it('should not start a connect server when required', function (done) {
        try {
            server.start().then(function(app) {
                assert.equal(app, app);
                assert.notEqual(app, undefined);
                done();
            });
        } catch (err) {
            return false;
            done();
        }
    });

});
