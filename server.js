/**
 * Created by Dali on 13/01/15.
 */

"use strict";
var request = require("request");
var express = require("express");
var app = express();

var args = process.argv.splice(2);
var port = args[0] > 0 ? args[0] : 8001;

app.all("/", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use("/", express.static(__dirname + "/app"));


var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});

var router = express.Router();

app.use("/api", router);


var secret = "6LedYgATAAAAAF04PiPzDP-bTBdqp7WrQsN1ZfTH";

router.route("/sendInfo/:data")
    .get(function (req, res) {
        var info = JSON.parse(req.params.data);
        var code = info.gRecaptchaResponse;
        var user_ip_address = info.myIp;

        if (typeof code === "undefined" || code === null || code === "null" || code.length < 1) {
            res.send({success: false});
            return;
        }


        var url = "https://www.google.com/recaptcha/api/siteverify?secret=" + secret + "&response=" + code + "&remoteip=" + user_ip_address;

        request(url, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.send(body);
            } else {
                res.send({success: false});
                return;
            }
        });


    });


