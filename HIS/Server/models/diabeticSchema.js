const mongoose = require('mongoose');

const diabeticschartSchema = new mongoose.Schema({
    // id:{
    //     type:String,
    //     required:true
    // },
    bht_no:{
        type:String,
        required:true
    },
    datetime:{
        type:Date,
        required:true
    },
    blood_sugar:{
        type:Decimal128,
        required:true
    }


});
module.exports = mongoose.model('diabeticsChart',diabeticschartSchema);