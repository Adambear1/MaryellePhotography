require("dotenv").config();
const router = require("express").Router();
const db = require("../models");
const { inquire } = require("../utils");

router.post("/", ({ body }, res) => {
  db.Inquire.create({
    fullName: body.fullName,
    phoneNumber: body.phoneNumber,
    email: body.email,
    phone: body.phone,
    contactMethod: body.contactMethod,
    additionalDetails: body.additionalDetails,
    scheduleDate: body.scheduleDate,
    submitDate: body.submitDate,
  })
    .then((data) => {
      console.log(data);
      res.json(data);
      //   inquire(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});

module.exports = router;
