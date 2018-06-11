const mongoose = require('mongoose');

const internalTransferSchema = new mongoose.Schema({
    // id:{
    //     type:String,
    //     required:true
    // },
    bht_no:{
        type:String,
        required:true
    },
    transfer_ward:{
        type:String,
        required:true
    },
    transfer_from_ward:{
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
    transfer_created_date_time:{
        type:datetime,
        required:true
    },
    transfer_created_user:{
        type:Number,
        required:true
    },
    read_transfer:{
        type:Number,
        required:true
    },
    new_bht:{
        type:String,
        required:true
    }



});
module.exports = mongoose.model('internalTransfer',internalTransferSchema);