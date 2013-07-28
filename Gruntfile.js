module.exports = function (grunt) {
    "use strict";

    // load all grunt tasks
    grunt.loadNpmTasks('grunt-ts');

    grunt.initConfig({
        ts: {
            normal: {
                src: ["app/**/*.ts"],                
                reference: "app/", // If specified, generate a reference.ts file at this place, Automatically manages relative file paths                
                out: 'app/out.js' // If specified, generate a out.js file which is the merged typescript output
            },
            awesome: {
                src: ["app/**/*.ts"],                
                reference: "app/", // If specified, generate a reference.ts file at this place, Automatically manages relative file paths                
                out: 'app/out.js', // If specified, generate a out.js file which is the merged typescript output
                watch: 'app/'
            }
        },
    });    
    
    grunt.registerTask("default", ["ts:awesome"]);
};
