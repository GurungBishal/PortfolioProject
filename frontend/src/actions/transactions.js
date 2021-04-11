import * as api from "../api/index";

export const fetchTransactions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTransactions();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (e) {
    console.log(e);
  }
};

export const createTransaction = (transaction) => async (dispatch) => {
  try {
    const { data } = await api.createTransaction(transaction);
    dispatch({ type: "CREATE", payload: data });
  } catch (e) {
    console.log(e.message);
  }
};
