const mongoose = require('mongoose');

const diabeticschartSchema = new mongoose.Schema({
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
        required:true
    },
    blood_sugar:{
        type:Number,
        required:true
    }


});
module.exports = mongoose.model('diabeticsChart',diabeticschartSchema);