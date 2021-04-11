const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 5000;
const transactionRoutes = require("./routes/transactions");
const stockRoutes = require("./routes/stock");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/transactions", transactionRoutes);
app.use("/stock", stockRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Portfolio Project");
});

const CONNECTION_URL =
  "mongodb+srv://PortfolioCreator:portfoliocreator123@cluster0.n1gfm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    })
  )
  .catch((e) => {
    console.log(e);
  });
