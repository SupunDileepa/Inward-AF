const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    auto_id: String,
    patient_id: String,
    request_unit: String,
    is_read: String,
    transfer_ward: String,
    remark: String,
    create_user: String,
    create_date_time: String,
    is_user_doctor: String,
    last_update_user: String,
    last_update_date_time: String,
    bht_no: String
});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("ward_admission_request", UserSchema);
