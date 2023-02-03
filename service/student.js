"use strict";
var Response = require("../utils/response");
const validate = require("../utils/validation")
const Stundentdb = require("../db/student.db")



/**
 * 
 * @param {*} body 
 * @returns user signup message
 */
exports.signUp = async function (body) {
  try {
    let valid = validate.isValidRegisterUserBody(body);
    if (!valid.isValid) {
      throw valid.payload;
    }
    
    const user = await Stundentdb.create(body);

    return user
  } catch (error) {
    if (error.code) throw error
    else throw Response.UnexpectedError;
  }
};
