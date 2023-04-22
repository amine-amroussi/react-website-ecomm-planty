import {
  CALCULATE_REVENUE,
  CREATE_ORDER_BEGGING,
  CREATE_ORDER_FAILED,
  CREATE_ORDER_SUCCESS,
  FETCH_USER_ORDERS_BEGGING,
  FETCH_USER_ORDERS_FAILED,
  FETCH_USER_ORDERS_SUCCESS,
  FETTCH_ALL_ORDERS_BEGGING,
  FETTCH_ALL_ORDERS_FAILED,
  FETTCH_ALL_ORDERS_SUCCESS,
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

  // FETCH MY ORDERS
  if (action.type === FETCH_USER_ORDERS_BEGGING)
    return { ...state, loading: true };
  if (action.type === FETCH_USER_ORDERS_FAILED)
    return { ...state, loading: false };

  if (action.type === FETCH_USER_ORDERS_SUCCESS) {
    const { orders } = action.payload;
    return { ...state, orders };
  }

  // FETCH ALL ORDERS
  if (action.type === FETTCH_ALL_ORDERS_BEGGING) {
    return { ...state, loading: true };
  }
  if (action.type === FETTCH_ALL_ORDERS_FAILED) {
    return { ...state, loading: false };
  }
  if (action.type === FETTCH_ALL_ORDERS_SUCCESS) {
    const { orders } = action.payload;
    return { ...state, allOrders: [...orders] };
  }

  // CLCULATE REVENUE
  if(action.type === CALCULATE_REVENUE) {
    const {allOrders} = state
    let revenue = 0
    let sales = 0
    allOrders.forEach(order => {
      revenue += order.subtotal
      sales += order.total
    });
    return {...state, revenue, sales }
  }

  return state;
};

export default order_reducer;
