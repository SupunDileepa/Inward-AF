const mongoose = require("mongoose");

const internalTransferSchema = new mongoose.Schema({
  patient_id: Number,
  patient_name: String,
  bht_no: String,
  transfer_ward: {
    type: String,
    required: true
  },

  reason_for_transfer: {
    type: String,
    required: true
  },
  report_of_special_examination: {
    type: String,
    required: true
  },
  treatment_suggested: {
    type: String,
    required: true
  },
  transfer_date: {
    type: Date,
    required: true
  },
  remark: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("internalTransfer", internalTransferSchema);
