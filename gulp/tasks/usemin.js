/**
 * Created by Dali on 15/01/15.
 */

"use strict";

var gulp = require("gulp"),
    usemin = require("gulp-usemin"),
    minifyCss = require("gulp-minify-css"),
    minifyHtml = require("gulp-minify-html"),
    plumber = require("gulp-plumber");


var opts = {comments: true, spare: true, empty: true};

gulp.task("usemin", function () {
    return gulp.src(__base + "/app/index.html")
        .pipe(usemin({
            css: [minifyCss(), "concat"],
            html: [minifyHtml(opts)]
        }))
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
            }
        }))
        .pipe(gulp.dest(__base + "/build/app"));
});
