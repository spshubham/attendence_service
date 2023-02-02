const Attendence = require("../models/attendence.model");
const Response = require("../utils/response");
const bcrypt = require("bcrypt")
const ObjectId = require("mongoose").Types.ObjectId
const Student = require("../models/student.model")
const Subject = require("../models/subject.model")
/**
 * 
 * @param {*} body 
 * @param {*} user_id 
 * @returns url added message
 */
exports.create = async(student_id,subject_id) =>{
    try {console.log(student_id);
        let body={
            student_id: student_id,
            subject_id:subject_id

        }
        let url = new Attendence({student_id:student_id,subject_id:subject_id});
        const res = await url.save()
        return res;
    } catch (error) {
        if(error.code == 11000)
            throw Response.UserAlreayExist;
        else throw Response.UnexpectedError;
    }
}


exports.track = async(student_id) =>{
    try {console.log(student_id);
        let res = Attendence.find({student_id:student_id}).sort({createdAt:1}).limit(5);
        
        return res;
    } catch (error) {console.log(error);
        if(error.code == 11000)
            throw Response.UserAlreayExist;
        else throw Response.UnexpectedError;
    }
}

exports.month = async(month) =>{
    try {console.log(month);
        let res = Attendence.find({ $expr: {
            $eq: [{ $month: "$createdAt" }, month]
            }});
        
        return res;
    } catch (error) {console.log(error);
        if(error.code == 11000)
            throw Response.UserAlreayExist;
        else throw Response.UnexpectedError;
    }
}

exports.threshhold = async(month) =>{
    try {
        mon  = Number(month)
        let res = await Attendence.aggregate([ 
            { 
                $project:
                {
                    student_id: "$student_id",
                    subject_id:"$subject_id",
                    month:{$month:"$createdAt"}
                    
                }
            },
            {
                $match:{
                    month: mon
                }
            },
            { 
                $group:
                { 
                    _id:{student_id:'$student_id',subject_id: "$subject_id" },count: { $sum: 1}
                }
            
            },
            {
                $lookup:
                  {
                    from: "subjects",
                    localField: "_id.subject_id",
                    foreignField:"_id",
                    as: "subject_data"
                  }
             },
             {
                $lookup:
                  {
                    from: "students",
                    localField: "_id.student_id",
                    foreignField:"_id",
                    as: "student_data"
                  }
             }
            
            
    ])

        // let student = await Student.find();
        // let subject = await Subject.find();
        let output = [];
        for(let item of res)
        {
            let obj = {};
            console.log(item.count, item.subject_data[0].no_of_lecture_per_month);
            if((item.count/item.subject_data[0].no_of_lecture_per_month)<0.80)
            {
                //console.log("OPOPOPPP", item);
                obj.name = item.student_data[0].name;
                obj.subject = item.subject_data[0].name;
                output.push(obj)
            }
            
            //console.log(item);
        }
        if(output.length)
            return output;
        else
            return Response.RecordNotFound
    } catch (error) {console.log(error);
        if(error.code == 11000)
            throw Response.UserAlreayExist;
        else throw Response.UnexpectedError;
    }
}

