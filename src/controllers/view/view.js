const View = require("../../models/Views.js");

exports.getAllViewData = async (req, res) => {
  try {
    const { _id } = req.params;
    const view = await View.findOne({ _id });

    res.status(200).json({
      success: true,
      data: view,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      Error: error.message,
    });
  }
};

exports.createFormSubmitCount = async (req, res) => {
    try{
        await View.findByIdAndUpdate('6539f6f7bcb1294ec15daee0', {$inc: { submitCount: 1}}, {new: true})
        res.status(200).json({
            success: true,
            response: "Application successfully submitted!",
          });
    } catch (error) {
        res.status(404).json({
            success: false,
            Error: error.message,
          });
    }
}

exports.createView = async (req, res) => {
    try{
        await View.findByIdAndUpdate('6539f6f7bcb1294ec15daee0', {$inc: { viewers: 1}}, {new: true})
        res.status(200).json({
            success: true,
            response: "Welcome",
          });
    } catch (error) {
        res.status(404).json({
            success: false,
            Error: error.message,
          });
    }
}