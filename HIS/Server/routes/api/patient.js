const express = require("express");
const router = express.Router();
const Patient = require("../../models/patient");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
require("../../config/passport")(passport);


// allow response header to use content length on CORS
router.use(function(req, res, next) { 
  res.header("Access-Control-Expose-Headers", "Content-Length");
  next();
});

// router.get("/", (req, res, next) => {
//   Food.find((err, result) => {
//     res.json(result);
//   });
// });

router.post("/add", (req, res, next) => {
  const Patients = new Patient({
    pId: req.body.pId,
    bht: req.body.bht,
    name: req.body.name,
    wardNo: req.body.wardNo,
    bedNo: req.body.bedNo,
    addmittedDate: req.body.addmittedDate
  });
  Patients.save((err, result) => {
    if (err) {
      return res.json({ error: err });
    }
    res.json({ obj: result, msg: "successfully inserted" });
  });
});



router.get("/patients",(req, res, next) => {
    Patient.find(function(err, result) {
      if (err) return next(err);
      res.json({ obj: result });
    });
  }
);



router.get('/patients/:bhtid', (req, res, next) => {   
    var query = {'bht' : req.params.bhtid};

    Patient.find(query, (err, result) => {
        if(err) return next(err);        
        res.json(result);
    });    
});

getToken = function(headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(" ");
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;
