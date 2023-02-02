
const Subject = require("../models/subject.model");
const Response = require("../utils/response");
const bcrypt = require("bcrypt")

/**
 * 
 * @param {*} body 
 * @returns user registered message
 */
exports.create = async(body) =>{
    try {

        let subject = new Subject(body);
        const res = await subject.save(subject)
        return res;
    } catch (error) {
        if(error.code == 11000)
            throw Response.UserAlreayExist;
        else throw Response.UnexpectedError;
    }
}
