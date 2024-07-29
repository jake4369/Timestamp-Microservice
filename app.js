const express = require("express");
const app = express();
const cors = require("cors");
const dateRouter = require("./routes/dateRoutes");

app.use(cors({ optionsSuccessStatus: 200 }));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// Date router middleware
app.use("/api/:date?", dateRouter);

module.exports = app;
