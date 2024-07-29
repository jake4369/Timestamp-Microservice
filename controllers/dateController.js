const {
  getCurrentDateResponse,
  getDateResponse,
  getTimestampResponse,
} = require("./../utils/utils");

const getTimeObject = (req, res) => {
  const { date } = req.params;

  // Return current date if no date given
  const currentDateResponse = getCurrentDateResponse();
  if (!date) {
    return res.json(currentDateResponse);
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
};

module.exports = { getTimeObject };
