const mongoose = require("mongoose");
autoIncrement = require("mongoose-auto-increment");



autoIncrement.initialize(mongoose.connection);

const PatientSchema = mongoose.Schema({


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


    required: true
  },
  bedNo: {
    type: Number,
    required: true
  },
  addmittedDate: {
    type: Date,
    default: Date.now()
  },
  dailyNo: {
    type: Number,
    required: true
  },
  monthlyNo: {
    type: Number,
    required: true
  },
  yearlyNo: {
    type: Number,
    required: true
  },
  patientComplain: {
    type: String,
    required: true
  },
  patientPreviousHistory: {
    type: String,
    required: true
  },
  gender: {
    type: String
  },
  dob: {
    type: String
  },
  doctor: {
    docName: {
      type: String,
      required: true
    }
  }
});
PatientSchema.plugin(autoIncrement.plugin, { model: "Patient", field: "pId" });

module.exports = mongoose.model("Patient", PatientSchema);


