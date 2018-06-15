const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    diet_id: String,
    patient_id: String,
    patient_diet: String,
    quantity: String,
    diet_category: String,
    time: String,
    status: String
});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("ward_diet", UserSchema);
