/**
 * Created by Dali on 15/01/15.
 */

"use strict";

global.__base = __dirname;

var gulp = require("./gulp")([
    "browserify",
    "clean",
    "copy-server",
    "copy-views",
    "lint",
    "usemin"
]);

gulp.task("build", ["clean", "copy-server", "copy-views", "usemin", "lint", "browserify"]);
gulp.task("default", ["build"]);