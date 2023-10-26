const mongoose = require("mongoose");
const { Schema } = mongoose;

const views = new Schema({
  viewers: {
    type: Number,
    required: true
  },
  submitCount: {
    type: Number,
    required: true
  }
});

const Viewers = mongoose.model('views', views);
module.exports = Viewers;
