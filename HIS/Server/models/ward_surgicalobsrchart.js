const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    row_no: String,
    bht_no: String,
    date_time: String,
    remark: String
});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("ward_surgicalobsrchart", UserSchema);
