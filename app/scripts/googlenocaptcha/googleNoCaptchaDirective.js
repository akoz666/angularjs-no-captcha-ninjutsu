/**
 * Created by Dali on 15/01/15.
 */
"use strict";
var myApp = angular.module("angular-nocaptcha", [
    "gNoCaptchaProvider",
    "gNoCaptchaService"
]);
myApp.directive("noCaptcha", ["googleNoCaptchaProvider","googleNoCaptchaService", function(googleNoCaptchaProvider, googleNoCaptchaService){
    return {
        restrict:"EA",
        scope: {
            gRecaptchaResponse:"=",
            siteKey:"@",
            theme:"@",
            control:"="
        },
        replace: true,
        link: function(scope, element) {
            var widgetId,
                grecaptchaCreateParameters,
                control = scope.control || {};

            grecaptchaCreateParameters = {
                sitekey: scope.siteKey || googleNoCaptchaProvider.siteKey,
                theme: scope.theme || googleNoCaptchaProvider.theme,
                callback: function(recaptcha){
                    scope.$apply(function(){
                        scope.gRecaptchaResponse = recaptcha;
                    });
                }
            };

            if(!grecaptchaCreateParameters.sitekey){
                throw new Error("Site Key is required");
            }

            googleNoCaptchaService.then(function(){
                widgetId = grecaptcha.render(
                    element[0],
                    grecaptchaCreateParameters
                );
                control.reset = function(){
                    grecaptcha.reset(widgetId);
                    scope.gRecaptchaResponse = null;
                };
            });

            scope.$on("$destroy", function(){
                grecaptcha.reset(widgetId);
            });
        }
    };
}]);