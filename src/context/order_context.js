import React, { useContext, useReducer } from "react";
import {
  CALCULATE_REVENUE,
  CLEAR_USER_CART_BEGGING,
  CLEAR_USER_CART_SUCCESS,
  CREATE_ORDER_BEGGING,
  CREATE_ORDER_FAILED,
  CREATE_ORDER_SUCCESS,
  EDIT_STATUS_BEGGING,
  FETCH_USER_ORDERS_BEGGING,
  FETCH_USER_ORDERS_FAILED,
  FETCH_USER_ORDERS_SUCCESS,
  FETTCH_ALL_ORDERS_BEGGING,
  FETTCH_ALL_ORDERS_FAILED,
  FETTCH_ALL_ORDERS_SUCCESS,
} from "../actions";
import reducer from "../reducer/order_reducer";
import axios from "../util/axios";
import { useCartContext } from "./cart_context";
import { useAlertContext } from "./alert_context";

const inistialState = {
  loading: false,
  orders: [],
  allOrders: [],
  revenue: 0,
  sales : 0
};

const OrderContext = React.createContext();
export const OrderProvider = ({ children }) => {
  const { clearCart } = useCartContext();
  const { showSuccessAlert } = useAlertContext();

  const [state, dispatch] = useReducer(reducer, inistialState);

  // create order
  const createOrder = async (order) => {
    dispatch({ type: CREATE_ORDER_BEGGING });
    try {
      const response = await axios.post("/order", order);
      if (response.status === 201) {
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: response.data });
        clearCart();
        localStorage.setItem("cart-products", null);
        clearUserCart();
      }
    } catch (error) {
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
      dispatch({ type: FETCH_USER_ORDERS_FAILED });
    }
  };

  // Fetch All orders
  const ftechAllOrders = async () => {
    dispatch({ type: FETTCH_ALL_ORDERS_BEGGING });
    try {
      const response = await axios.get("/order/");
      if (response.status === 200) {
        dispatch({ type: FETTCH_ALL_ORDERS_SUCCESS, payload: response.data });
      }
    } catch (error) {
      dispatch({ type: FETTCH_ALL_ORDERS_FAILED });
    }
  };

  const clearUserCart = async () => {
    dispatch({ type: CLEAR_USER_CART_BEGGING });
    try {
      const response = await axios.get(`/cart/clear`);
      if (response.status === 200) {
        dispatch({ type: CLEAR_USER_CART_SUCCESS });
      }
    } catch (error) {
    }
  };

  const editStatus = async (status, id) => {
    dispatch({ type: EDIT_STATUS_BEGGING });
    try {
      const response = await axios.patch(`/order/edit-status/${id}`, status);

      if (response.status === 200) {
        showSuccessAlert("The Status was edited.");
      }
    } catch (error) {
    }
  };

  const calculateRevenue = () => {
    dispatch({ type: CALCULATE_REVENUE });
  };

  return (
    <OrderContext.Provider
      value={{
        ...state,
        createOrder,
        fetchUserOrders,
        ftechAllOrders,
        editStatus,
        calculateRevenue
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
