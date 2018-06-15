const mongoose = require("mongoose");
autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);
const bcrypt = require("bcryptjs");

const LabTestSchema = new mongoose.Schema({
    bed_id: String,
    patient_id: String, 
    test_id:String,
    tester:String,
    testName:String,
    testResult:String,
    image:String
});

LabTestSchema.plugin(autoIncrement.plugin, {model: "Lab_Tests", field: "test_id"});

module.exports = mongoose.model("Lab_Tests", LabTestSchema);