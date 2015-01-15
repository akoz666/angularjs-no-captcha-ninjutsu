/**
 * Created by Dali on 15/01/15.
 */

"use strict";


var gulp = require("gulp"),
    browserify = require("gulp-browserify"),
    plumber = require("gulp-plumber"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify");

gulp.task("browserify", function () {
    return gulp.src([__base + "/app/scripts/main.js"])
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
            }
        }))
        .pipe(browserify({
            insertGlobals: true,
            debug: false
        }))
        .pipe(concat("bundle.js"))
        .pipe(uglify())
        .pipe(gulp.dest(__base + "/build/app/js"));
});
