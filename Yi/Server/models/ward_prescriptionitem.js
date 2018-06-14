const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  bht: String,
  pId: String,
  drugName: String,
  dose: String,
  frequency: String,
  prescriber: String,
  duration:String

});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("ward_prescriptionitem", UserSchema);
