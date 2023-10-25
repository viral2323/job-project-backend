const Job = require("../../models/Job.js");
const { sendEmail } = require("../../utils/sendMail.js");

exports.getAllJobData = async (req, res) => {
  try {
    const user = await Job.find();

    res.status(200).json({
      success: true,
      count: user.length,
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      Error: error.message,
    });
  }
};

exports.getJobData = async (req, res) => {
  try {
    const user = await Job.find().select({
      'jobData.jobName': 1,
      'jobData.jobTitle': 1,
      'jobData.experience': 1,
      'jobData.field': 1,
      '_id': 1  // Exclude the _id field if you don't need it
    }).lean();

    const formattedData = user.map(item => {
      return {
        ...item.jobData,
        id: item._id
      };
    })

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    res.status(200).json({
      success: true,
      data: formattedData,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      Error: error.message,
    })
  }
};

exports.register = async (req, res) => {
  try {
    const { jobData, data } = req.body;

    const user = await Job.create({
      jobData,
      data
    });

    res.status(201).json({
      success: true,
      data: user,
      message: "Job created successfully.",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      Error: error.message,
    });
  }
};

exports.getJobDataById = async (req, res) => {
  try {
    const { job_id } = req.params;
    const job = await Job.findOne({ _id: job_id });

    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      Error: error.message,
    })
  }
}