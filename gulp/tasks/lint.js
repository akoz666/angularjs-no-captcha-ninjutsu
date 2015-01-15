/**
 * Created by Dali on 15/01/15.
 */

"use strict";

var gulp = require("gulp"),
    jshint = require("gulp-jshint");

gulp.task("lint", function () {
    return gulp.src([__base + "/app/scripts/**/*.js", __base + "/server.js", __base + "/gulp/**/*.js"])
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});