const mongoose = require('mongoose');

const liquidBalanceChartSchema = new mongoose.Schema({
    // id:{
    //     type:String,
    //     required:true
    // },
    bht_no:{
        type:String,
        required:true
    },
    datetime:{
        type:datetime,
        required:true
    },
    Oral:{
        type:Decimal123,
        required:true
    },
    Saline:{
        type:Decimal123,
        required:true
    },
    Output:{
        type:Decimal123,
        required:true
    }

});
module.exports = mongoose.model('liquidBalanceChart',liquidBalanceChartSchema);