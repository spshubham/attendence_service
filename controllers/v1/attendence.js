"use strict";

var utils = require("../../utils/writer.js");
var Attendence = require("../../service/attendence");



module.exports.register = function register (req, res, next, student_id, subject_id) {
  Attendence.register(student_id, subject_id)
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};

module.exports.track = function track (req, res, next, student_id) {
  Attendence.track(student_id)
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};
module.exports.month = function month (req, res, next, month) {
  Attendence.month(month)
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};
module.exports.threshhold = function threshhold (req, res, next, month) {
  Attendence.threshhold(month)
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};
