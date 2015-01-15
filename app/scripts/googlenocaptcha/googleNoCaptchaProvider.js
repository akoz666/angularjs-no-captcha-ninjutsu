/**
 * Created by Dali on 15/01/15.
 */

"use strict";
var myApp = angular.module("gNoCaptchaProvider", []);
myApp.provider("googleNoCaptchaProvider", function GoogleNoCaptchaProvider() {
    var siteKey,
        theme;

    this.setSiteKey = function(_siteKey){
        siteKey = _siteKey;
    };

    this.setTheme = function(_theme){
        theme = _theme;
    };

    this.$get = [function GoogleNoCaptchaFactory() {
        return {
            theme: theme,
            siteKey: siteKey
        };
    }];
});