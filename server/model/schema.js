const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;

const CreativeSchema = new Schema({
  url: String,
  uid: String,
  directory: String,
  width: Number,
  height: Number,
  defaultValue: Object,
  possibleValue: Object,
  previewData: [
    {
      previewName: String,
      defaultValues: Object,
    },
  ],
  date: {
    type: String,
    default: Date.now(),
  },
});

module.exports = mongoose.model("CreativeModel", CreativeSchema);
