const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);
const internalTransferSchema = new mongoose.Schema({
    patient_id: Number,
    patient_name:String,
    bht_no: String,
    transfer_ward: String,
    transfer_from_ward: String,
    reson_for_trasnsfer: String,
    report_of_spacial_examination: String,
    treatment_suggested: String,

    transfer_date:Date,
    transfer_created_date_time: Date.now(),
    transfer_created_user: String,
    read_transfer: String,
    new_bht_no: String,
    remark: String
});

internalTransferSchema.plugin(mongooseUniqueValidator);
internalTransferSchema.plugin(autoIncrement.plugin, {model:"ward_internaltransfer", field:"tranfer_id"});

module.exports = mongoose.model("ward_internaltransfer", internalTransferSchema);

