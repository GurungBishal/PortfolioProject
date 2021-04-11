import React, { useState } from "react";
import { TextField, Typography, Button, Paper } from "@material-ui/core";
import useStyles from "./style";
import { createTransaction } from "../../actions/transactions";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";

function Form() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks);
  const [transactionData, setTransactionData] = useState({
    stockName: "",
    type: "",
    amount: "",
    quantity: "",
    createdAt: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTransaction(transactionData));
    setTransactionData({
      stockName: "",
      type: "",
      amount: "",
      quantity: "",
      createdAt: "",
    });
  };

  const stockList = stocks.map((stock, i) => {
    return (
      <MenuItem key={i} value={stock.name}>
        {stock.name}
      </MenuItem>
    );
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransactionData({
      ...transactionData,
      [name]: value,
    });
  };

  return (
    <>
      <Paper className={classes.paper}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Typography variant="h6">Creating a Stock Transaction</Typography>
          <TextField
            className={classes.margin}
            name="stockName"
            select
            variant="outlined"
            label="Stock Name"
            value={transactionData.stockName}
            onChange={handleChange}
            style={{ display: "block" }}
          >
            {stockList}
          </TextField>
          <TextField
            className={classes.margin}
            name="type"
            type="text"
            variant="outlined"
            label="Transaction Type"
            value={transactionData.type}
            onChange={handleChange}
          />

          <TextField
            className={classes.margin}
            name="quantity"
            type="number"
            variant="outlined"
            label="Quantity"
            value={transactionData.quantity}
            onChange={handleChange}
          />
          <TextField
            className={classes.margin}
            name="amount"
            type="number"
            variant="outlined"
            label="Amount"
            value={transactionData.amount}
            onChange={handleChange}
          />
          <TextField
            className={classes.margin}
            name="createdAt"
            type="date"
            variant="outlined"
            value={transactionData.createdAt}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            size="medium"
            className={classes.button}
            type="submit"
          >
            Create
          </Button>
        </form>
      </Paper>
    </>
  );
}

export default Form;
