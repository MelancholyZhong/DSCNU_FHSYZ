const express = require("express");

const router = express.Router();

const { sendAlert } = require("../service/info-service");

router.post("/", sendAlert);

module.exports = router;
