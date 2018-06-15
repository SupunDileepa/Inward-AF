const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    note_id: String,
    bht_no: String,
    note: String,
    create_user: String,
    date_time: String
});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("ward_nursenote", UserSchema);
