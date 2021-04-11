import { combineReducers } from "redux";
import transactionReducer from "./transactionReducer";
import stockReducer from "./stockReducer";

export default combineReducers({
  transactions: transactionReducer,
  stocks: stockReducer,
});
