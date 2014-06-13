// # Task automation for Ghost

configureGrunt = function (grunt) {

    var cfg = {
        // Standard build type, for when we have nightlies again.
        buildType: 'Build',
        // Load package.json so that we can create correctly versioned releases.
        pkg: grunt.file.readJSON('package.json'),

        // ### grunt-mocha-cli
        // Configuration for the mocha test runner, used to run unit, integration and route tests as part of
        // `grunt validate`. See [grunt validate](#validate) and its sub tasks for more information.
        mochacli: {
            options: {
                ui: 'bdd',
                reporter: 'spec',
                timeout: '15000'
            },
            // #### All Unit tests
            unit: {
                src: ['tests/*.js']
            }

        }
    };

    // Load the configuration
    grunt.initConfig(cfg);
    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.registerTask('test', 'Run unit tests (mocha)',
        [ 'mochacli:unit']);

};

// Export the configuration
module.exports = configureGrunt;
