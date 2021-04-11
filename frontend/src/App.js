import React, { useEffect } from "react";
import Form from "./components/Form/Form";
import { Container, Grid, Typography, Grow } from "@material-ui/core";
import Transactions from "./components/Transaction/Transaction";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "./actions/transactions";
import { fetchStock } from "./actions/stock";

function App() {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions);
  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(fetchStock());
  }, [dispatch, transactions]);
  return (
    <Container maxWidth="lg">
      <Typography variant="h2">Stock Market</Typography>

      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Transactions />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
