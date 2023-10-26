const { Router } = require("express");

const {
  getAllViewData,
  createView,
  createFormSubmitCount
} = require("../controllers/view/view.js");
const router = Router();

router
  .get("/get-all-views/:_id", getAllViewData)
  .patch("/create-view", createView)
  .patch("/create-form-submit", createFormSubmitCount)

module.exports = router;
