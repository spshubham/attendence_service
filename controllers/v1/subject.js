"use strict";

var utils = require("../../utils/writer.js");
var Subject = require("../../service/subject");
module.exports.register = function register (req, res, next, body) {
    Subject.register(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};



module.exports.getDetails = function getDetails (req, res, next, email, password, ) {
    Subject.getDetails(email, password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
