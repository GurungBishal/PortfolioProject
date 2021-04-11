export default (transactions = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...transactions, action.payload];
    default:
      return transactions;
  }
};
