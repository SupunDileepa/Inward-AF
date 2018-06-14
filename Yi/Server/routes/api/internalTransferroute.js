
const express = require('express');
const router = express.Router();
const Chart = require('../../models/internalTransferSchema');

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
        bht_no:req.body.bht_no,
        transfer_ward:req.body.bht_no,
        transfer_from_ward:req.body.bht_no,
        reason_for_transfer:req.body.bht_no,
        report_of_spacial_examination:req.body.bht_no,
        treatment_suggested:req.body.treatment_suggested,
        transfer_created_date_time:req.body.transfer_created_date_time,
        transfer_created_user:req.body.transfer_created_user,
        read_transfer:req.body.read_transfer,
        new_bht:req.body.new_bht
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