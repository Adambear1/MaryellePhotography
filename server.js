const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");

require("dotenv").config();
const PORT = process.env.PORT || 5000;

// MW
const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));

// DB => API

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// const publicPath = path.join(__dirname, './client/public');
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`PORT ${PORT}`);
});
