/**
 * Created by Dali on 13/01/15.
 */

"use strict";
//angular
require("angular");
require("angular-ui-router");


//Google nocaptcha
require("./googlenocaptcha/googleNoCaptchaProvider");
require("./googlenocaptcha/googleNoCaptchaService");
require("./googlenocaptcha/googleNoCaptchaDirective");

var myApp = angular.module("myApp", [
    "ui.router",
    "angular-nocaptcha"
]);



//routes
var routes = require("./routes/routes");
myApp.config(["$stateProvider", "$urlRouterProvider", routes]);

angular.isUndefinedOrNull = function (val) {
    return angular.isUndefined(val) || val === null;
};


var noCaptchaController = require("./controllers/noCaptchaController");
myApp.controller("NoCaptchaController", ["$scope", "$http", noCaptchaController]);