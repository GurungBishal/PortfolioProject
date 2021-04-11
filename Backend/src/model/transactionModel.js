const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    required: true,
  },
  stockName: {
    type: String,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
