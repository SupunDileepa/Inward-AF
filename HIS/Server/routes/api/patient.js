const express = require("express");
const router = express.Router();
const Patient = require("../../models/patient");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
require("../../config/passport")(passport);

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

router.get("/all",(req, res, next) => {
    Patient.find(function(err, result) {
      if (err) return next(err);
      res.json({ obj: result });
    });
  }
);

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
