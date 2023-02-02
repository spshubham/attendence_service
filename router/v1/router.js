var express = require("express");
var router = express.Router();
const studentController = require("../../controllers/v1/student");
const attendenceController = require("../../controllers/v1/attendence")
const subjectController = require("../../controllers/v1/subject")


/* User API routes */
router.post("/student/signup", function(req, res, next){
  studentController.signUp(req, res, next, req.body);
});

router.post("/subject/register", function(req, res, next){
  subjectController.register(req, res, next, req.body);
});

router.post("/attendence/register", function(req, res, next){console.log(req.params);
  attendenceController.register(req, res, next, req.query["student_id"],req.query["subject_id"]);
});

router.get("/attendence/track", function(req, res, next){
  attendenceController.track(req, res, next, req.query["student_id"]);
});

router.get("/attendence/month", function(req, res, next){
  attendenceController.month(req, res, next, req.query["month"]);
});

router.get("/attendence/threshhold", function(req, res, next){
  attendenceController.threshhold(req, res, next, req.query["month"]);
});

module.exports = router;
