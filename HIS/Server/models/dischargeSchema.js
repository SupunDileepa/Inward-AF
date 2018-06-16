const mongoose = require('mongoose');

const dischargeSchema = new mongoose.Schema({
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
    dischargedDate:{
        type:Date,
        required:true
    }


});
module.exports = mongoose.model('discharge',dischargeSchema);