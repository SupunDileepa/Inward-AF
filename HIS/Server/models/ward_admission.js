const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    bht_no: String,
    patient_id: String,
    bed_no: String ,
    ward_no: String ,
    daily_no: String ,
    monthly_no: String,
    yearly_no: String,
    doctor_id: String,
    admit_date_time: String,
    patient_complain: String,
    previous_history: String,
    discharge_type: String,
    remark: String,
    admission_unit: String,
    created_user: String,
    created_date_time: String,
    last_updated_user: String,
    last_updated_date_time: String,
    status: String,
    sign: String,
    outcomes: String,
    dischargediagnosis: String,
    referredto: String  

});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("ward_admission", UserSchema);
