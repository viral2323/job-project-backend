const { Router } = require("express");

const {
  getAllJobData,
  getJobData,
  register,
  getJobDataById
} = require("../controllers/job/job.js");
const router = Router();

router
  .get("/get-jobs", getAllJobData)
  .get("/get-jobdata", getJobData)
  .get("/getJobById/:job_id", getJobDataById)
  .post("/create-job", register)

module.exports = router;
