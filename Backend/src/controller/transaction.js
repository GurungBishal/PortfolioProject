const Transaction = require("../model/transactionModel");

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (e) {
    res.status(404).json({ error: e.meesage });
  }
};

const createTransaction = async (req, res) => {
  const transaction = req.body;
  const newTransaction = new Transaction(transaction);
  try {
    await newTransaction.save();
    res.status(201).json({ newTransaction });
  } catch (e) {
    res.status(404).json({ error: e.meesage });
  }
};

module.exports = {
  getTransactions,
  createTransaction,
};
