const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    ward_no: String,
    category: String,
    ward_gender: String
});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("ward_wards", UserSchema);
