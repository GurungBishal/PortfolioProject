const Stock = require("../model/stockModel");

const getStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.status(200).json(stocks);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

const createStock = async (req, res) => {
  const stock = req.body;
  const newStock = new Stock(stock);
  try {
    await newStock.save();
    res.status(201).json(newStock);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

module.exports = {
  getStocks,
  createStock,
};
