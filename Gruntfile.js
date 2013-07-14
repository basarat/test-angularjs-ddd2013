module.exports = function (grunt) {
    "use strict";

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        watch: {
            /*
             * watch and compile typescript to javascript
             */
            typescript: {
                files: ['app/**/*.ts'],                
                tasks: ['ts:normal']
            }
        },

        clean: {
            test: [
                "app/**/*.js",
            ]
        },

        ts: {
            normal: {
                src: ["app/**/*.ts"],
                verbose: true,
                reference: "app/", // If specified, generate a reference.ts file at this place, Automatically manages relative file paths                
                out: 'app/out.js' // If specified, generate a out.js file which is the merged typescript output
            }
        },
    });
    
    grunt.loadNpmTasks("grunt-contrib-clean");    
    grunt.registerTask("default", ["ts:normal","watch:typescript"]);
};
