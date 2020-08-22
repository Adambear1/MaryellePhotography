require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports.inquire = function (data) {
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAILPASS,
    },
  });
  let mailOptions = {
    from: process.env.EMAIL,
    // to: "john-hooker@hotmail.com",
    to: "adamcarlbirgenheier@gmail.com",
    subject: `NEW INQUIRE`,
    text: `Hi Maryelle,
    A new inquire has been requested at ${data.submitDate} by ${data.fullName} at ${data.phoneNumber}.
    
    Name: ${data.fullName}

    Phone Number: ${data.phoneNumber}

    email: ${data.email}

    Contact Method: ${data.contactMethod}

    Additional Details: ${data.additionalDetails}

    scheduleDate: ${data.scheduleDate}

    
    `,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return err;
    }
    return console.log("Email sent!!!");
  });
};
