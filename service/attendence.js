"use strict";
var Response = require("../utils/response");


const AttendenceDb = require("../db/attendence.db");



/**
 * 
 * @param {*} body 
 * @param {*} user_id 
 * @returns add the url in db
 */
exports.register = async function (student_id, subject_id) {
  try {

    const url = await AttendenceDb.create(student_id, subject_id);
    return url
  } catch (error) {

    if (error.code) throw error
    else throw Response.UnexpectedError;
  }
};

exports.track = async function (student_id) {
  try {

    const url = await AttendenceDb.track(student_id);
    return url
  } catch (error) {

    if (error.code) throw error
    else throw Response.UnexpectedError;
  }
};

exports.month = async function (month) {
  try {

    const url = await AttendenceDb.month(month);
    return url
  } catch (error) {

    if (error.code) throw error
    else throw Response.UnexpectedError;
  }
};

exports.threshhold = async function (month) {
  try {

    const url = await AttendenceDb.threshhold(month);
    return url
  } catch (error) {

    if (error.code) throw error
    else throw Response.UnexpectedError;
  }
};
