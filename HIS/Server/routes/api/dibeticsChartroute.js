
const express = require('express');
const diabeticsRouter = express.Router();
const Chart = require('../../models/diabeticSchema');

diabeticsRouter.get('/all',(req,res,next)=>{
    Chart.find((err,result)=>{
        if(err){
            return  res.json({error:err});
        }
        res.json(result);
    });
});

diabeticsRouter.post('/add',(req,res,next)=>{
    const Charts = new Chart({
        patient_id:req.body.patient_id,
        bht_no:req.body.bht_no,
        datetime:req.body.datetime,
        blood_sugar:req.body.blood_sugar
        
    });
    Charts.save((err,result)=>{
        if(err){
            return res.json({error:err});
        }
        res.json({obj:result});
    })
});

// diabeticsRouter.get('/:id',(req,res,next)=>{
//     Chart.findOne({_id:req.params.id},(err,result)=>{
//         if(err){
//             return res.json({error:err});
//         }
//         res.json(result);
//     })
// });

diabeticsRouter.get('/:patient_id/:bht_no',(req,res,next)=>{
    Chart.find({patient_id:req.params.patient_id, bht_no:req.params.bht_no},(err,result)=>{
        if(err){
            return res.json({error:err});
        }
        res.json(result);
    })
});

diabeticsRouter.delete('/delete/:id',(req,res,next)=>{
    Chart.remove({_id:req.params.id},(err,result)=>{
        if(err){
            return res.json({error:err})
        }
        res.json({obj:result,msg:"successfully removed"})
    })
});

diabeticsRouter.put('/update/:id',(req,res,next)=>{
    Chart.findOneAndUpdate({_id:req.params.id},{$set:{
            name:req.body.name
        }},(err,result)=>{
        if(err){
            return res.json({error:err})
        }
        res.json({obj:result,msg:"successfully updated"})
    })
});

module.exports = diabeticsRouter;