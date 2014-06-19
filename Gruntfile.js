module.exports = function(grunt) {

    grunt.initConfig({
        'connect': {
            demo: {
                options: {
                    hostname: '*',
                    base: '_book',
                    open: true,
                    keepalive: true
                }
            }
        },
        'gitbook': {
            optiosn: {
                "input": "./",
                "generator": "site"
            }
        },
        'gh-pages': {
            options: {
                base: '_book'
            },
            src: [
                '**/*'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    // grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-gitbook');
    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.registerTask('build',  ['gitbook']);
    grunt.registerTask('deploy', ['gh-pages']);
    grunt.registerTask('server', ['connect']);

};
