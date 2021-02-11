// require node packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// set PORT or environment variable for deployment
const PORT = process.env.PORT || 8080;

const app = express();
app.use(logger("dev"));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve html
app.use(express.static("public"));

// connect to mongoose database with Atlas or local machine
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
