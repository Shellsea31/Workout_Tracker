const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(logger("dev"));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve html
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
