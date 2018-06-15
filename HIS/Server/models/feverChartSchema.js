const mongoose = require('mongoose');

const feverchartSchema = new mongoose.Schema({
    patient_id:{
        type:String,
        required:true
    },

    bht_no:{
        type:String,
        required:true
    },
    temperature:{
        type:Number,
        required:true
    },
    datetime:{
        type:Date,
        required:true
    }

});
module.exports = mongoose.model('feverChart',feverchartSchema);