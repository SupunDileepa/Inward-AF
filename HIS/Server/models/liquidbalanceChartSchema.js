const mongoose = require('mongoose');

const liquidBalanceChartSchema = new mongoose.Schema({
    patient_id:{
        type:String,
        required:true
    },
    bht_no:{
        type:String,
        required:true
    },
    datetime:{
        type:Date,
      //  required:true
    },
    Oral:{
        type:Number,
        required:true
    },
    Saline:{
        type:Number,
        required:true
    },
    Output:{
        type:Number,
        required:true
    }

});
module.exports = mongoose.model('liquidBalanceChart',liquidBalanceChartSchema);