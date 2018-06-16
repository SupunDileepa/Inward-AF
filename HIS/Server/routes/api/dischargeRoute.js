
const express = require('express');
const router = express.Router();
const Chart = require('../../models/dischargeSchema');

router.get('/all',(req,res,next)=>{
    Chart.find((err,result)=>{
        if(err){
            return  res.json({error:err});
        }
        res.json(result);
    });
});

router.post('/add',(req,res,next)=>{
    const Charts = new Chart({
        patient_id: req.body.patient_id,
  patient_name:req.body.patient_name,
        bht_no:req.body.bht_no,
        dischargedDate:req.body.dischargedDate,
        
    });
    Charts.save((err,result)=>{
        if(err){
            return res.json({error:err});
        }
        res.json({obj:result});
    })
});

router.get('/:id',(req,res,next)=>{
    Chart.findOne({_id:req.params.id},(err,result)=>{
        if(err){
            return res.json({error:err});
        }
        res.json(result);
    })
});

router.delete('/delete/:id',(req,res,next)=>{
    Chart.remove({_id:req.params.id},(err,result)=>{
        if(err){
            return res.json({error:err})
        }
        res.json({obj:result,msg:"successfully removed"})
    })
});

router.put('/update/:id',(req,res,next)=>{
    Chart.findOneAndUpdate({_id:req.params.id},{$set:{
            name:req.body.name
        }},(err,result)=>{
        if(err){
            return res.json({error:err})
        }
        res.json({obj:result,msg:"successfully updated"})
    })
});

module.exports = router;