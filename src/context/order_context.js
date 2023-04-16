import React, { useContext, useReducer } from "react";
import {
  CREATE_ORDER_BEGGING,
  CREATE_ORDER_FAILED,
  CREATE_ORDER_SUCCESS,
  FETCH_USER_ORDERS_BEGGING,
  FETCH_USER_ORDERS_SUCCESS,
  FETTCH_ALL_ORDERS_BEGGING,
  FETTCH_ALL_ORDERS_FAILED,
  FETTCH_ALL_ORDERS_SUCCESS,
} from "../actions";
import reducer from "../reducer/order_reducer";
import axios from "../util/axios";

const inistialState = {
    loading : false,
    orders : []
};

const OrderContext = React.createContext();
export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, inistialState);

  // create order
  const createOrder = async (order) => {
    dispatch({ type: CREATE_ORDER_BEGGING });
    try {
      const response = await axios.post("/order", order);
      console.log(response.data)
      if (response.status === 201) {
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: response.data });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: CREATE_ORDER_FAILED });
    }
  };

  // fetch orders
  const fetchUserOrders = async () => {
    dispatch({ type: FETCH_USER_ORDERS_BEGGING });
    try {
      const response = await axios.get("/order/showAllMyOrders");
      if (response.status === 200) {
        dispatch({ type: FETCH_USER_ORDERS_SUCCESS, payload: response.data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch Alll orders
  const ftechAllOrders = async () => {
    dispatch({ type: FETTCH_ALL_ORDERS_BEGGING });
    try {
      const response = await axios.get("/order/showAllMyOrders");
      if (response.status === 200) {
        dispatch({ type: FETTCH_ALL_ORDERS_SUCCESS, payload: response.data });
      }
    } catch (error) {
      dispatch({ type: FETTCH_ALL_ORDERS_FAILED });

      console.log(error);
    }
  };

  return (
    <OrderContext.Provider value={{ ...state, createOrder, fetchUserOrders, ftechAllOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
