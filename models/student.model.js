 var mongoose = require("mongoose");
 var student = mongoose.Schema({
   name: {
    type: String,
     required: true
   },
   age: {
    type: Number,
    required: true
  },
   email: {
     type: String,
     required: true,
     unique: true
   },
   password: {
     type: String,
     required: true
   },
   city: {
    type: String,
    required: true
  }
 }, { timestamps: true });
 
 student.index({email:1}, {unique: true})

module.exports = mongoose.model("Student", student);
