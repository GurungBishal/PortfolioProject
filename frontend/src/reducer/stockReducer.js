export default (stocks = [], action) => {
  switch (action.type) {
    case "FETCH":
      return action.payload;
    case "GENERATE":
      return [...stocks, action.payload];
    default:
      return stocks;
  }
};
