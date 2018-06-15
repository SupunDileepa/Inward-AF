
const express = require('express');
const fvrrouter = express.Router();
const Chart = require('../../models/feverChartSchema');

fvrrouter.get('/all',(req,res,next)=>{
    Chart.find((err,result)=>{
        if(err){
            return  res.json({error:err});
        }
        res.json(result);
    });
});

fvrrouter.post('/add',(req,res,next)=>{
    const Charts = new Chart({
        patient_id:req.body.patient_id,
        bht_no:req.body.bht_no,
        temperature:req.body.temperature,
        datetime:req.body.datetime
    });
    Charts.save((err,result)=>{
        if(err){
            return res.json({error:err});
        }
        res.json({obj:result});
    })
});

// fvrrouter.get('/:bht_no',(req,res,next)=>{
//     Chart.findOne({bht_no:req.params.bht_no},(err,result)=>{
//         if(err){
//             return res.json({error:err});
//         }
//         res.json(result);
//     })
// });

fvrrouter.get('/:patient_id/:bht_no',(req,res,next)=>{
    Chart.find({patient_id:req.params.patient_id, bht_no:req.params.bht_no},(err,result)=>{
        if(err){
            return res.json({error:err});
        }
        res.json(result);
    })
});

fvrrouter.delete('/delete/:bht_no',(req,res,next)=>{
    Chart.remove({bht_no:req.params.bht_no},(err,result)=>{
        if(err){
            return res.json({error:err})
        }
        res.json({obj:result,msg:"successfully removed"})
    })
});

fvrrouter.put('/update/:bht_no',(req,res,next)=>{
    Chart.findOneAndUpdate({bht_no:req.params.bht_no},{$set:{
       
       //bht_no:req.body.bht_no,
       temperature:req.body.temperature,
       datetime:req.body.datetime
        }},(err,result)=>{
        if(err){
            return res.json({error:err})
        }
        res.json({obj:result,msg:"successfully updated"})
    })
});

module.exports = fvrrouter;