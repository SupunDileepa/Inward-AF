const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    prescribe_id: String,
    bht_no: String,
    diagnosis: String,
    created_user: String,
    created_date_time: String
});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("ward_prescriptions", UserSchema);
