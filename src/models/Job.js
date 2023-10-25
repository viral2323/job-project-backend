const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobDescriptionSchema = new Schema({
  title: {
      type: String,
      required: true
  },
  description: {
      type: Schema.Types.Mixed,
      required: true
  }
});

const jobDataSchema = new Schema({
  jobName: {
      type: String,
      required: true
  },
  jobTitle: {
      type: String,
      required: true
  },
  experience: {
      type: String,
      required: true
  },
  field: {
      type: String,
      required: true
  }
});

const jobInfoSchema = new Schema({
  jobData: {
      type: jobDataSchema,
      required: true
  },
  data: {
      type: [jobDescriptionSchema],
      required: true
  }
});

const Job = mongoose.model('jobinformations', jobInfoSchema);
module.exports = Job;
