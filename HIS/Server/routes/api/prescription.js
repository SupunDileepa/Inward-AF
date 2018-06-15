const express = require("express");
const router = express.Router();
const Prescription = require("../../models/ward_prescriptionitem");


//add new prescriptions to the database

router.post("/prescriptions", (req, res, next) => {
  const pres = new Prescription({
    bht: req.body.bht,
    pId: req.body.pId,
    drugName: req.body.drugName,
    dose: req.body.dose,
    frequency: req.body.frequency,
    prescriber: req.body.prescriber,
    duration:req.body.duration
  });
  pres.save((err, result) => {
    if (err) {
      return res.json({ error: err });
    }
    res.json({result});
  });
});


//get all the prescriptions for the given patient id and beadhead id

router.get("/prescriptions/:pid/:bht", (req, res, next) => {
    var query = {
      "pId" : req.params.pid,
      "bht" : req.params.bht
    }

    Prescription.find(query, function(err, result) {
      if (err) return next(err);
      res.json(result);
    });
  }
);

module.exports = router;