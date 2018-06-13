const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    term_id: String,
    bht_no: String,
    no_of_terms: String,
    start_date: String,
    end_date: String,
    create_user: String
});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("ward_prescription_terms", UserSchema);
