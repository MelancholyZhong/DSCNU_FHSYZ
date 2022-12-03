const express = require("express");

const router = express.Router();

const { addInfo, getInfo } = require("../service/info-service");

router.post("/", addInfo);

router.get("/:id", getInfo);

module.exports = router;
