const express = require("express");
const logger = require("morgan");

const PORT = process.env.PORT || 8080;

const db = require("./models");

const app = express();
app.use(logger("dev"));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve html
app.use(express.static("public"));
// require("./routes/api-routes")(app);
require("./routes/html-routes")(app);


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
