/**
 * Created by Dali on 15/01/15.
 */

"use strict";

var gulp = require("gulp"),
    del = require("delete");


gulp.task("clean", function () {
    return del.sync(__base + "/build", function (err) {
        if (err) {
            throw err;
        }
    });
});
