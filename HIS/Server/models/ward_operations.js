const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    operation_id: String,
    bht_no: String,
    operation_type: String,
    operation_discription: String
});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("ward_operations", UserSchema);
