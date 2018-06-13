const express = require("express");
const router = express.Router();
const LabTest = require("../../models/labTest");


//add new test req to the database

router.post("/labtests", (req, res, next) => {
  const labby = new LabTest({
    bed_id: req.body.bedid,
    patient_id: req.body.pId,
    test_id:req.body.testId,
    tester:req.body.tester,
    testName:req.body.testName,
    testResult:req.body.testResult
  });
  labby.save((err, result) => {
    if (err) {
      return res.json({ error: err });
    }
    res.json({result});
  });
});


//get all the lab test for the given patient

router.get('/labtests/:pId', (req, res, next) => {
    var query = {'pId' : req.params.pId};

    LabTest.find(query, (err, result) => {
        if(err) return next(err);
        res.json({result});
    });
});


module.exports = router;
