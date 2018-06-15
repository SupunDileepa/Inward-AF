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
    addmittedDate: req.body.addmittedDate,
    doctor: {
      docName: req.body.docName
    },
    //docName: req.body.doctor.docName,
    yearlyNo: req.body.yearlyNo,
    monthlyNo: req.body.monthlyNo,
    dailyNo: req.body.dailyNo,
    patientComplain: req.body.patientComplain,
    patientPreviousHistory: req.body.patientPreviousHistory,
    gender: req.body.gender,
    dob: req.body.dob
  });
  Patients.save((err, result) => {
    if (err) {
      return res.json({ error: err });
    }
    res.json({ obj: result, msg: "successfully inserted" });
  });
});

router.get(
  "/all",
  // passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    // var token = getToken(req.headers);
    // if (token) {
    Patient.find(function(err, result) {
      if (err) return next(err);
      res.json({ obj: result });
    });
    //   } else {
    //     return res.status(403).send({ success: false, msg: "Unauthorized." });
    //   }
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
