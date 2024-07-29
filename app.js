// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/:date", (req, res) => {
  const { date } = req.params;

  const parsedDate = new Date(date);

  let utc;
  let unix;

  if (parsedDate !== "Invalid Date" && !isNaN(parsedDate)) {
    utc = new Date(parsedDate).toUTCString();
    unix = Date.parse(parsedDate);

    return res.json({
      unix,
      utc,
    });
  } else {
    return res.json({
      error: "Invalid Date",
    });
  }
});

module.exports = app;
