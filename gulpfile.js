/*jslint node, maxlen: 120 */

"use strict";

var gulp = require("gulp"),
    babel = require("gulp-babel");

// Compile javascript with optional minification
gulp.task("scripts", function () {
    return gulp.src(["./lib/promisify.js", "./lib/promise.js"])
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});

// Show help by default
gulp.task("default", ["scripts"]);
