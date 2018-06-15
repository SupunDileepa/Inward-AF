const mongoose = require("mongoose");
autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const allergySchema = mongoose.Schema({
  pid: {
    type: String,
    required: true
  },
  bht: {
    type: String,
    required: true
  },
  aid: {
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

allergySchema.plugin(autoIncrement.plugin, {model: "allergies", field: "aid"});
module.exports = mongoose.model("allergies", allergySchema);
