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

app.get("/api/:date?", (req, res) => {
  const { date } = req.params;

  if (!date) {
    const utc = new Date().toUTCString();
    const unix = Date.parse(utc);

    return res.json({
      unix,
      utc,
    });
  }

  const parsedDate = new Date(date);

  // Check if date string is correct
  if (!isNaN(parsedDate)) {
    const utc = new Date(parsedDate).toUTCString();
    const unix = Date.parse(parsedDate);

    return res.json({
      unix,
      utc,
    });
  }

  // Check if timestamp is correct
  if (!isNaN(Number(date))) {
    const utc = new Date(Number(date)).toUTCString();
    const unix = Number(date);

    return res.json({
      unix,
      utc,
    });
  }

  return res.json({
    error: "Invalid Date",
  });
});

module.exports = app;
