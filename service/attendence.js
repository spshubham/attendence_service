"use strict";
var Response = require("../utils/response");
const validate = require("../utils/validation")

const AttendenceDb = require("../db/attendence.db");
const jwt = require('jsonwebtoken');
const conf = require("../conf/conf")


/**
 * 
 * @param {*} body 
 * @param {*} user_id 
 * @returns add the url in db
 */
exports.register = async function (student_id, subject_id) {
  try {console.log(student_id);
    // if (body) {
    //   if (!body.url_name || !body.frequency) {
    //     throw Response.InvalidReqBody;
    //   }
    //   let valid = validate.validateURLReq(body);
    //   if (!valid.isValid) {
    //     throw valid.payload;
    //   }

    // }
    const url = await AttendenceDb.create(student_id, subject_id);
    return url
  } catch (error) {

    if (error.code) throw error
    else throw Response.UnexpectedError;
  }
};

exports.track = async function (student_id) {
  try {console.log(student_id);
    // if (body) {
    //   if (!body.url_name || !body.frequency) {
    //     throw Response.InvalidReqBody;
    //   }
    //   let valid = validate.validateURLReq(body);
    //   if (!valid.isValid) {
    //     throw valid.payload;
    //   }

    // }
    const url = await AttendenceDb.track(student_id);
    return url
  } catch (error) {

    if (error.code) throw error
    else throw Response.UnexpectedError;
  }
};

exports.month = async function (month) {
  try {console.log(month);
    // if (body) {
    //   if (!body.url_name || !body.frequency) {
    //     throw Response.InvalidReqBody;
    //   }
    //   let valid = validate.validateURLReq(body);
    //   if (!valid.isValid) {
    //     throw valid.payload;
    //   }

    // }
    const url = await AttendenceDb.month(month);
    return url
  } catch (error) {

    if (error.code) throw error
    else throw Response.UnexpectedError;
  }
};

exports.threshhold = async function (month) {
  try {console.log(month);
    // if (body) {
    //   if (!body.url_name || !body.frequency) {
    //     throw Response.InvalidReqBody;
    //   }
    //   let valid = validate.validateURLReq(body);
    //   if (!valid.isValid) {
    //     throw valid.payload;
    //   }

    // }
    const url = await AttendenceDb.threshhold(month);
    return url
  } catch (error) {

    if (error.code) throw error
    else throw Response.UnexpectedError;
  }
};
// /**
//  * 
//  * @param {*} body 
//  * @param {*} user_id 
//  * @param {*} url_id 
//  * @returns update the given url
//  */
// exports.updateUrl = async function (body, user_id, url_id) {
//   try {
//     if (!validate.isValidMongooseObjectId(url_id))
//       return Response.InvalidURLId
//     if (body) {
//       let valid = validate.validateURLReq(body);
//       if (!valid.isValid) {
//         throw valid.payload;
//       }
//     }
//     const url = await UrlDb.updateUrl(body, user_id, url_id);
//     if (url)
//       return Response.URLUpdated;
//     else return Response.RecordNotFound
//   } catch (error) {

//     if (error.code) throw error
//     else throw Response.UnexpectedError;
//   }
// };


// /**
//  * 
//  * @param {*} user_id 
//  * @returns list the url
//  */
// exports.listUrl = async function (user_id) {
//   try {
//     const url = await UrlDb.listUrl(user_id);
//     if (url)
//       return url;
//     else return Response.RecordNotFound

//   } catch (error) {

//     if (error.code) throw error
//     else throw Response.UnexpectedError;
//   }
// };

// /**
//  * 
//  * @param {*} user_id 
//  * @param {*} url_id 
//  * @returns delete the url
//  */

// exports.removeUrl = async function (user_id, url_id) {
//   try {
//     if (!validate.isValidMongooseObjectId(url_id))
//       return Response.InvalidURLId
//     const url = await UrlDb.removeUrl(user_id, url_id);
//     if (url.deletedCount)
//       return Response.URLDeleted;
//     else return Response.RecordNotFound
//   } catch (error) {

//     if (error.code) throw error
//     else throw Response.UnexpectedError;
//   }
// };


// /**
//  * 
//  * @param {*} user_id 
//  * @param {*} url_id 
//  * @returns track the url
//  */
// exports.trackUrl = async function (user_id, url_id) {
//   try {
//     if (!validate.isValidMongooseObjectId(url_id))
//       return Response.InvalidURLId
//     let url = await UrlDb.trackUrl(user_id, url_id);


//     if (url) {
//       let url_arr = [...url.url_status];

//       url_arr = url_arr.map(doc => {
//         let status = {
//           status: doc.status,
//           time: new Date(doc.time)
//         }
//         return status
//       })

//       url = {
//         url_name: url.url_name,
//         url_status: url_arr
//       }
//       return url
//     } else return Response.RecordNotFound
//   } catch (error) {
//     console.log(error);
//     if (error.code) throw error
//     else throw Response.UnexpectedError;
//   }
// };