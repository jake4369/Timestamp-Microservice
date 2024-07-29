const express = require("express");
const { getTimeObject } = require("./../controllers/dateController");

// Express router
const router = express.Router();

router.route("/:date?").get(getTimeObject);

module.exports = router;
