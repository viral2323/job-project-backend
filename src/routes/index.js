const job = require("./job.js");
const view = require("./view.js")

module.exports = function (app) {
  app.use("/job", job);
  app.use("/view", view);
};
