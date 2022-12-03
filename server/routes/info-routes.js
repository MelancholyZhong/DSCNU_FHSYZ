const express = require("express");

const router = express.Router();

const { addInfo } = require("../service/info-service");

router.post("/", addInfo);

module.exports = router;
