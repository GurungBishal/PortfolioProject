const express = require("express");

const router = express.Router();

const { getStocks, createStock } = require("../controller/stock");

router.get("/", getStocks);
router.post("/", createStock);

module.exports = router;
