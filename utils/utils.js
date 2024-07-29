const getCurrentDateResponse = () => {
  const currentDate = new Date();

  return {
    unix: currentDate.getTime(),
    utc: currentDate.toUTCString(),
  };
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
      utc: date.toUTCString(),
    };
  }

  return null;
};

module.exports = {
  getCurrentDateResponse,
  getDateResponse,
  getTimestampResponse,
};
