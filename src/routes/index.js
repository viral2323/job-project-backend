const job = require("./job.js");

module.exports = function (app) {
  app.use("/job", job);
};
