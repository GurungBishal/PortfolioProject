import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchTransactions = () => API.get("/transactions");
export const createTransaction = (newTransaction) =>
  API.post("/transactions", newTransaction);

export const createStock = (newStock) => API.post("/stock", newStock);
export const fetchStock = () => API.get("/stock");
