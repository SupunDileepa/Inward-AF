const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    transfer_id: String,
    bht_no: String,
    transfer_from: String,
    transfer_to: String,
    name_of_guardian: String,
    address_of_guardian: String,
    reason_for_transfer: String,
    report_of_spacial_examination: String,
    treatment_suggested: String,
    transfer_created_date_time: String,
    transfer_created_user: String
});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("ward_externaltransfer", UserSchema);
