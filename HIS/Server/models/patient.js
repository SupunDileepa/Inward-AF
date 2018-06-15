const mongoose = require("mongoose");
autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const patientSchema = new mongoose.Schema({
  pId: {
    type: Number,
    required: true
  },
  bht: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  wardNo: {
    type: Number,
    required: true,
  },
  bedNo: {
    type: Number,
    required: true,
  },
  admittedDate: {
    type: Date,
    default: Date.now()
  }
});

patientSchema.plugin(autoIncrement.plugin, {model: "Patient", field: "pId"});

module.exports = mongoose.model("patient", patientSchema);
