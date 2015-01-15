/**
 * Created by Dali on 27/12/14.
 */

"use strict";
var gulp = require("gulp");

module.exports = function (tasks) {
    tasks.forEach(function (name) {
        gulp.task(name, function () {
            require("./tasks/" + name);
        });
    });
    return gulp;
};