const mongoose = require('mongoose');

const externalTransferSchema = new mongoose.Schema({
    // id:{
    //     type:String,
    //     required:true
    // },
    patient_id: Number,
  patient_name: String,
    bht_no:{
        type:String,
        required:true
    },
    transfer_from:{
        type:String,
        required:true
    },
    Transfer_to:{
        type:String,
        required:true
    },
    name_of_guardian:{
        type:String,
        required:true
    },
    address_of_the_guardian:{
        type:String,
        required:true
    },
    reason_for_transfer:{
        type:String,
        required:true
    },
    report_of_spacial_examination:{
        type:String,
        required:true
    },
    treatment_suggested:{
        type:String,
        required:true
    },
    Transfer_created_date_time:{
        type:Date,
        required:true
    },
    transfer_created_user:{
        type:Number,
        required:true
    },



});
module.exports = mongoose.model('externalTransfer',externalTransferSchema);