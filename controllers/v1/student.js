"use strict";

var utils = require("../../utils/writer.js");
var Student = require("../../service/student");
module.exports.signUp = function signUp (req, res, next, body) {
  Student.signUp(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};



module.exports.getDetails = function getDetails (req, res, next, email, password, ) {
  User.getDetails(email, password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
