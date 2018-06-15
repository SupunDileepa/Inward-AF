const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

const ExternalTransferSchema = new mongoose.Schema({
  transfer_id: Number,

  bht_no: String,
  transfer_from: String,
  transfer_to: String,
  name_of_guardian: String,
  address_of_guardian: String,
  reason_for_transfer: String,
  report_of_spacial_examination: String,
  treatment_suggested: String,
  transfer_created_date_time: Date,

  remark: String,
  transfer_created_user: String
});

ExternalTransferSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model(
  "ward_externaltransfer",
  ExternalTransferSchema
);
