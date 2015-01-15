/**
 * Created by Dali on 30/12/14.
 */
"use strict";

var routes = function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "views/subscription.html",
            controller: "NoCaptchaController"
        });
};

module.exports = routes;