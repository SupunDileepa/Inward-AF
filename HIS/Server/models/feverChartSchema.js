const mongoose = require('mongoose');

const feverchartSchema = new mongoose.Schema({
    // id:{
    //     type:String,
    //     required:true
    // },
    bht_no:{
        type:String,
        required:true
    },
    temperature:{
        type:Decimal123,
        required:true
    },
    datetime:{
        type:datetime,
        required:true
    }

});
module.exports = mongoose.model('feverChart',chartSchema);