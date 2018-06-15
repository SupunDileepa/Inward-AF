const express = require("express");
const router = express.Router();
const allergies = require("../../models/allergies");

// add an allery
router.post("/allergies", (req, res, next) => {
    const allergy = new allergies({
        pid: req.body.pid,
        bht: req.body.bht,
        aid: req.body.aid,
        name: req.body.name,
        status: req.body.status,
        category: req.body.category,
        severity: req.body.severity,
        remark: req.body.remark
    });
    allergy.save((err, result) => {
      if (err) {
        return res.json({ error: err });
      }
      res.json({ obj: result, msg: "successfully inserted" });
    });
  });

// get allergies given pid and bht
router.get("/allergies/:pid/:bht", (req, res, next) => {
    var query = {
      "pid" : req.params.pid,
      "bht" : req.params.bht
    }

    allergies.find(query, function(err, result) {
      if (err) return next(err);
      res.json(result);
    });
  }
);

// update an allergy
router.put('/allergies/:pid/:bht/:aid', (req, res, next) => {    
    var query = {
      'pid' : req.params.pid,
      'bht' : req.params.bht,
      'aid' : req.params.aid
    }
    var newValues = {
      name: req.body.name,
      status: req.body.status,
      category: req.body.category,
      severity: req.body.severity,
      remark: req.body.remark  
    }

    allergies.findOneAndUpdate(query, newValues, (err, result) => {
        if(err) return next(err);
        res.json({ obj: result, msg: "successfully updated" });
    });
});

module.exports = router;
