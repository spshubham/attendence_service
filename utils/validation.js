const { default: mongoose } = require("mongoose");
const emailRegex = /^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,5}$/;
const response = require("./response");
const URL = require("url").URL;

/**
 * 
 * @param {*} id 
 * @returns validate the mongoId
 */
exports.isValidMongooseObjectId = (id) => {
    return mongoose.isValidObjectId(id);
}

/**
 * 
 * @param {*} email 
 * @returns valid the email
 */
exports.isEmail = (email) =>{
    return emailRegex.test(email);
}


/**
 * 
 * @param {*} body 
 * @returns valida the req.body
 */
exports.isValidRegisterUserBody = (body) =>{
    try{    
        
        if(typeof body.password != "string" || body.password.length < 8){
            return {
                isValid : false,
                payload : response.InvalidPassword
            }
        }
        if(!this.isEmail(body.email)){
            return {
                isValid : false,
                payload : response.InvalidEmail
            }
        }
        if(typeof body.name != "string" || body.name.trim().length < 1 ){
            return {
                isValid : false,
                payload : response.InvalidUserName
            }
        }
        if(typeof body.city != "string" || body.city.trim().length < 1 ){
            return {
                isValid : false,
                payload : response.InvalidCity
            }
        }
        if(typeof body.age != "number"){
            return {
                isValid : false,
                payload : response.InvalidAge
            }
        }
        return {
            isValid:true
        }
    }catch(err){
        return {
            isValid : false,
            payload : response.InvalidReqBody
        }
    }

}



