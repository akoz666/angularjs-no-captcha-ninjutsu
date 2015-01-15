/**
 * Created by Dali on 15/01/15.
 */

"use strict";
var gulp = require("gulp");

gulp.task("copy-server", function () {
    return gulp.src(__base + "/server.js")
        .pipe(gulp.dest(__base + "/build"));
});