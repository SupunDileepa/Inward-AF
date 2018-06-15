
const express = require('express');
const liquidbalanceRouter = express.Router();
const Chart = require('../../models/liquidbalanceChartSchema');

liquidbalanceRouter.get('/all',(req,res,next)=>{
    Chart.find((err,result)=>{
        if(err){
            return  res.json({error:err});
        }
        res.json(result);
    });
});

liquidbalanceRouter.post('/add',(req,res,next)=>{
    const Charts = new Chart({
        patient_id:req.body.patient_id,
        bht_no:req.body.bht_no,
        datetime:req.body.datetime,
        Oral:req.body.Oral,
        Saline:req.body.Saline,
        Output:req.body.Output
    });
    Charts.save((err,result)=>{
        if(err){
            return res.json({error:err});
        }
        res.json({obj:result});
    })
});

// liquidbalanceRouter.get('/:bht_no',(req,res,next)=>{
//     Chart.findOne({bht_no:req.params.bht_no},(err,result)=>{
//         if(err){
//             return res.json({error:err});
//         }
//         res.json(result);
//     })
// });

liquidbalanceRouter.get('/:patient_id/:bht_no',(req,res,next)=>{
    Chart.find({patient_id:req.params.patient_id, bht_no:req.params.bht_no},(err,result)=>{
        if(err){
            return res.json({error:err});
        }
        res.json(result);
    })
});


liquidbalanceRouter.delete('/delete/:bht_no',(req,res,next)=>{
    Chart.remove({bht_no:req.params.bht_no},(err,result)=>{
        if(err){
            return res.json({error:err})
        }
        res.json({obj:result,msg:"successfully removed"})
    })
});

liquidbalanceRouter.put('/update/:bht_no',(req,res,next)=>{
    Chart.findOneAndUpdate({bht_no:req.params.bht_no},{$set:{
       // bht_no:req.body.bht_no,
        datetime:req.body.datetime,
        Oral:req.body.Oral,
        Saline:req.body.Saline,
        Output:req.body.Output
        }},(err,result)=>{
        if(err){
            return res.json({error:err})
        }
        res.json({obj:result,msg:"successfully updated"})
    })
});

module.exports = liquidbalanceRouter;