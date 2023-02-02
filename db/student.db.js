
const Student = require("../models/student.model");
const Response = require("../utils/response");
const bcrypt = require("bcrypt")

/**
 * 
 * @param {*} body 
 * @returns user registered message
 */
exports.create = async(body) =>{
    try {
        let pass = body.password;
        
        const hash = await bcrypt.hash(body.password, 10);
        // Store hash in the database
        body.password=hash;
        let student = new Student(body);
        const res = await student.save(student)
        return res;
    } catch (error) {
        if(error.code == 11000)
            throw Response.UserAlreayExist;
        else throw Response.UnexpectedError;
    }
}



