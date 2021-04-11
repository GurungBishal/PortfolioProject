import * as api from "../api/index";

export const fetchStock = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStock();
    dispatch({ type: "FETCH", payload: data });
  } catch (e) {
    console.log(e);
  }
};

export const createStock = (newStock) => async (dispatch) => {
  try {
    const { data } = await api.createStock(newStock);
    dispatch({ type: "GENERATE", payload: data });
  } catch (e) {
    console.log(e);
  }
};
