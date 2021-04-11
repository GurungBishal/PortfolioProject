const mongoose = require("mongoose");

const stockSchema = mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
