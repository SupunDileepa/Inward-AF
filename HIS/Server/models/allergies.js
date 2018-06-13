const mongoose = require("mongoose");

const allergySchema = mongoose.Schema({
  bht: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  severity: {
    type: String,
    required: true
  },
  remark: {
    type: String
  }
});

module.exports = mongoose.model("allergies", allergySchema);
