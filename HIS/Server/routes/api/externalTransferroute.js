
const express = require('express');
const router = express.Router();
const Chart = require('../../models/ward_externaltransfer');

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
        transfer_from:req.body.transfer_from,
        transfer_to:req.body.transfer_to,
        name_of_guardian:req.body.name_of_guardian,
        address_of_guardian:req.body.address_of_the_guardian,
        reason_for_transfer:req.body.reason_for_transfer,
        report_of_spacial_examination:req.body.report_of_spacial_examination,
        treatment_suggested:req.body.treatment_suggested,
        transfer_created_date_time:req.body.transfer_created_date_time,
        transfer_created_user:req.body.transfer_created_user,
        remark:req.body.remark
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