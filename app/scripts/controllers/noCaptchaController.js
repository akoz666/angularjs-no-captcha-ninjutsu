/**
 * Created by Dali on 30/12/14.
 */
"use strict";

var ip = require("ip");

var NoCaptchaController = function ($scope, $http) {
    $scope.danger = false;
    $scope.myInfo = {};
    $scope.text = false;
    $scope.hideForm = false;
    $scope.captchaSended = false;
    $scope.sendInfo = function () {

        var data = {
            gRecaptchaResponse: $scope.gRecaptchaResponse,
            myInfo: $scope.myInfo,
            myIp: ip.address()
        };

        $http.get("/api/sendInfo/" + JSON.stringify(data)).
            success(function (data, status, headers, config) {
                console.log(data);
                $scope.captchaSended = true;
                if (data.success) {
                    $scope.danger = true;
                    $scope.captchaSended = true;
                    $scope.text = "Thanks reCaptcha to avoid bot !!!.";
                    $scope.hideForm = true;
                } else {
                    $scope.danger = false;
                    $scope.captchaSended = true;
                    $scope.text = "The security code is incorrect. Please try again.";
                }
            }).
            error(function (data, status, headers, config) {
                console.log(data);
                $scope.danger = true;
                $scope.captchaSended = true;
                $scope.text = "Error.";
            });
    };
};

module.exports = NoCaptchaController;