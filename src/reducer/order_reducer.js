import {
  CREATE_ORDER_BEGGING,
  CREATE_ORDER_FAILED,
  CREATE_ORDER_SUCCESS,
} from "../actions";

const order_reducer = (state, action) => {
  if (action.type === CREATE_ORDER_BEGGING) return { ...state, loading: true };

  if (action.type === CREATE_ORDER_SUCCESS) {
    const { order } = action.payload;
    return {
      loading: false,
      orders: [...state.orders, order],
    };
  }
  if (action.type === CREATE_ORDER_FAILED) {
    return { ...state, loading: false };
  }
  return state;
};

export default order_reducer;
