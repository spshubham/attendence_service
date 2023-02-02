var mongoose = require("mongoose");
var attendence = mongoose.Schema({
  student_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Student"
  },
  subject_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Subject"
  },

}, { timestamps: true });

module.exports = mongoose.model("Attendence", attendence);