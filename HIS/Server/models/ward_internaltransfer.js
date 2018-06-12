const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    tranfer_id: String,
    bht_no: String,
    transfer_ward: String,
    transfer_from_ward: String,
    reson_for_trasnsfer: String,
    report_of_spacial_examination: String,
    treatment_suggested: String,
    transfer_created_date_time: String,
    transfer_created_user: String,
    read_transfer: String,
    new_bht_no: String
});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("ward_internaltransfer", UserSchema);
