/**
 * Created by Dali on 15/01/15.
 */

"use strict";
var myApp = angular.module("gNoCaptchaService", []);
myApp.service("googleNoCaptchaService", ["$q", "$window", function GoogleNoCaptchaService($q, $window) {
    var deferred = $q.defer();

    $window.recaptchaOnloadCallback = function () {
        deferred.resolve();
    };

    var script = document.createElement("script");
    //&hl=en
    script.src = "https://www.google.com/recaptcha/api.js?onload=recaptchaOnloadCallback&render=explicit";
    document.body.appendChild(script);

    return deferred.promise;
}]);