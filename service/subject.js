"use strict";
var Response = require("../utils/response");
const validate = require("../utils/validation")
const Subjectdb = require("../db/subject.db")
const jwt = require('jsonwebtoken');
const conf = require("../conf/conf")


/**
 * 
 * @param {*} body 
 * @returns user signup message
 */
exports.register = async function (body) {
  try {
    // let valid = validate.isValidRegisterUserBody(body);
    // if (!valid.isValid) {
    //   throw valid.payload;
    // }
    
    const user = await Subjectdb.create(body);

    return user
  } catch (error) {
    if (error.code) throw error
    else throw Response.UnexpectedError;
  }
};
