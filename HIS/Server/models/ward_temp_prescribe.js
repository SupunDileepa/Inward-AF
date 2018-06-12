const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    auto_id: String,
    term_id: String,
    drug_id: String,
    dose: String,
    frequency: String
});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("ward_temp_prescribe", UserSchema);
