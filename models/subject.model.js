var mongoose = require("mongoose");
var subject = mongoose.Schema({
  name: {
   type: String,
    required: true
  },
  no_of_lecture_per_month: {
   type: Number,
   required: true
 }
}, { timestamps: true });


module.exports = mongoose.model("Subject", subject);
