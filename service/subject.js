"use strict";
var Response = require("../utils/response");

const Subjectdb = require("../db/subject.db")



/**
 * 
 * @param {*} body 
 * @returns user signup message
 */
exports.register = async function (body) {
  try {

    const user = await Subjectdb.create(body);

    return user
  } catch (error) {
    if (error.code) throw error
    else throw Response.UnexpectedError;
  }
};
