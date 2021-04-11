const express = require("express");

const router = express.Router();

const {
  createTransaction,
  getTransactions,
} = require("../controller/transaction");

router.get("/", getTransactions);
router.post("/", createTransaction);

module.exports = router;
