const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(logger("dev"));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve html
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"))

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
