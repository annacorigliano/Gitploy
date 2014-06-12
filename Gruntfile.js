module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json')

    });

    grunt.registerTask('test', 'Run unit tests', function() {
        grunt.log.writeln("Finishing");
    });

}