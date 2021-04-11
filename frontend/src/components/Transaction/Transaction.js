import React, { useState } from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function Transaction() {
  const transactions = useSelector((state) => state.transactions);
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple-table">
        <TableHead>
          <TableRow>
            <TableCell>Stock name</TableCell>
            <TableCell>TransactionType</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Transaction Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction._id}>
              <TableCell>{transaction.stockName}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{transaction.quantity}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>
                {new Date(transaction.createdAt).toDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Transaction;
