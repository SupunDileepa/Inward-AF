const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    auto_id: String,
    doctor_id: String,
    d_sign: String,
    createuser: String,
    createdatetime: String
});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("ward_signature", UserSchema);
