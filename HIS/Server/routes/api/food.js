const express = require("express");
const router = express.Router();
const Food = require("../../models/food");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
require("../../config/passport")(passport);

// router.get("/", (req, res, next) => {
//   Food.find((err, result) => {
//     res.json(result);
//   });
// });

router.get(
  "/foods",
  // passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    // var token = getToken(req.headers);
    // if (token) {
    Food.find(function(err, foods) {
      if (err) return next(err);
      res.json(foods);
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
