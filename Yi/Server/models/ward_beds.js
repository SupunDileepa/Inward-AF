const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    bed_id: String,
    bed_no: String,
    bed_type: String,
    ward_no: String,
    availability: String,
    patient_id: String  
});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("ward_beds", UserSchema);
