const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    id: String,
    bht_no: String,
    treat: String,
    image: String,
    create_user: String,
    create_date_time: String
});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("ward_treatment", UserSchema);
