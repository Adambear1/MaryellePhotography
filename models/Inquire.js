const mongoose = require("mongoose");
const InquireSchema = mongoose.Schema({
  fullName: {
    type: String,
    trim: true,
    required: [true, "Name Required"],
  },
  email: {
    type: String,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      `Please Fill Valid Email Address`,
    ],
    trim: true,
    required: [true, "Email Required"],
  },
  phoneNumber: {
    type: String,
    validate: {
      validator: function (v) {
        var re = /^\d{10}$/;
        return v == null || v.trim().length < 1 || re.test(v);
      },
      message: "Provided phone number is invalid.",
    },
    trim: true,
    required: [true, "Name Required"],
  },
  contactMethod: {
    type: String,
    enum: ["email", "text", "phoneCall"],
    required: [true, "Contact Method Required"],
  },
  additionalDetails: {
    type: String,
  },
  scheduleDate: {
    type: String,
    required: [true, "Schedule Date Required"],
  },

  submitDate: {
    type: Date,
    default: Date.now(),
  },
});

const Inquire = mongoose.model("inquire", InquireSchema);

module.exports = Inquire;
