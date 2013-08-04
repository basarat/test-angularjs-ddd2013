module.exports = function (grunt) {
    "use strict";

    // load all grunt tasks
    grunt.loadNpmTasks('grunt-ts');

    grunt.initConfig({
        ts: {
            awesome: {
                src: ["app/**/*.ts"],                
                reference: "app/reference.ts", // If specified this file is maintained by ts
                out: 'app/out.js', // If specified, generate a out.js file which is the merged typescript output
                watch: 'app/'
            }
        },
    });    
    
    grunt.registerTask("default", ["ts:awesome"]);
};
