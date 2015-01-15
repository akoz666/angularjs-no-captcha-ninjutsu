/**
 * Created by Dali on 15/01/15.
 */

"use strict";

var gulp = require("gulp"),
    minifyHtml = require("gulp-minify-html");

var opts = {comments: true, spare: true, empty: true};

gulp.task("copy-views", function () {
    return gulp.src(__base + "/app/views/**/*")
        .pipe(minifyHtml(opts))
        .pipe(gulp.dest(__base + "/build/app/views"));
});