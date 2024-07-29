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

  const getCurrentDateResponse = () => {
    const currentDate = new Date();

    return res.json({
      unix: currentDate.getTime(),
      utc: currentDate.toUTCString(),
    });
  };

  const getDateResponse = (date) => {
    const parsedDateString = new Date(date);

    if (!isNaN(parsedDateString)) {
      return {
        unix: parsedDateString.getTime(),
        utc: parsedDateString.toUTCString(),
      };
    }

    return null;
  };

  const getTimestampResponse = (timestamp) => {
    // Convert param from string to number
    const parsedTimeStamp = Number(timestamp);
    if (!isNaN(parsedTimeStamp)) {
      const date = new Date(parsedTimeStamp);

      return {
        unix: parsedTimeStamp,
        utc: date / toUTCString(),
      };
    }

    return null;
  };

  // Return current date if no date given
  if (!date) {
    getCurrentDateResponse();
  }

  // Return {unix, utc} if given correct date string
  const dateResponse = getDateResponse(date);
  if (dateResponse) {
    return res.json(dateResponse);
  }

  // Return {unix, utc} if given correct date string
  const timestampResponse = getTimestampResponse(date);
  if (timestampResponse) {
    return res.json(timestampResponse);
  }

  // Return error if date is invalid
  return res.json({
    error: "Invalid Date",
  });
});

module.exports = app;
