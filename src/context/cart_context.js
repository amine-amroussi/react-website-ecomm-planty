import React, { useContext, useEffect, useReducer } from "react";
import {
  ADD_TO_CART_BEGGING,
  ADD_TO_CART_FAILED,
  ADD_TO_CART_SUCCESS,
  CALCULATE_TOTAL,
  CLEAR_CART,
  CREATE_ADRESS_BEGGING,
  CREATE_ADRESS_FAILED,
  CREATE_ADRESS_SUCCESS,
  FETCH_ADRESS_BEGGING,
  FETCH_ADRESS_FAILED,
  FETCH_ADRESS_SUCCESS,
  LOAD_ALL_COUNTRIES_BEGGING,
  LOAD_ALL_COUNTRIES_FAILED,
  LOAD_ALL_COUNTRIES_SUCCESS,
  REMOVE_CART_BEGGING,
  REMOVE_CART_SUCCESS,
  REMOVE_PRODUCT_FROM_CART,
  SHOW_USER_CART_BEGGING,
  SHOW_USER_CART_FAILED,
  SHOW_USER_CART_SUCCESS,
  TOGGLE_ADRESS_MODAL,
  UPDATE_ADRESS_BEGGING,
  UPDATE_ADRESS_FAILED,
  UPDATE_ADRESS_SUCCESS,
} from "../actions";
import reducer from "../reducer/cart_reducer";
import axios from "../util/axios";
import { useAlertContext } from "./alert_context";
import { loadStripe } from "@stripe/stripe-js";

const initialState = {
  products: [],
  subtotal: 0,
  shippingFee: 0,
  total: 0,
  loading: false,
  cartLoading: false,
  adress: {},
  isAdressModalOpened: false,
  allCountries: [],
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  let stripePromise;

  const [state, dispatch] = useReducer(reducer, initialState);

  const { showSuccessAlert, showErrorAlert } = useAlertContext();

  useEffect(() => {
    setTimeout(() => {
      showMyCart();
    }, 3000);
  }, []);

  useEffect(() => {
    loadAllCountries();
    fetchAdress()
  }, []);

  // ADD TO CART
  const addToCart = async ({ cart }) => {
    dispatch({ type: ADD_TO_CART_BEGGING });
    try {
      const response = await axios.post(`/cart/addToCart`, cart);
      if (response.status === 201 || response.status === 200) {
        dispatch({ type: ADD_TO_CART_SUCCESS, payload: response.data });
      }
      if (response.data.cart.products.length > state.products.length) {
        showSuccessAlert("The product was added successfuly.");
      }
    } catch (error) {
      showErrorAlert("Can't add this product, please try later.");
      dispatch({ type: ADD_TO_CART_FAILED });
    }
  };

  // SHOW CURRENT USER CART
  const showMyCart = async () => {
    dispatch({ type: SHOW_USER_CART_BEGGING });
    try {
      const response = await axios.get(`/cart/showMyCart`);
      if (response.status === 200) {
        dispatch({ type: SHOW_USER_CART_SUCCESS, payload: response.data });
      }
    } catch (error) {
      dispatch({ type: SHOW_USER_CART_FAILED });
    }
  };

  // REMOVE FROM CART
  const removeFromCart = async ({ _id }) => {
    dispatch({ type: REMOVE_CART_BEGGING });
    try {
      const response = await axios.patch(`/cart/${_id}/removeItem/`);
      if (response.status === 200) {
        dispatch({ type: REMOVE_CART_SUCCESS, payload: response.data });
      }
    } catch (error) {
    }
  };

  // REMOVE PRODUCT FROM CART
  const removeProductFromCart = async ({ _id }) => {
    try {
      const response = await axios.patch(`/cart/${_id}/deleteProduct/`);
      if (response.status === 200) {
        dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: { _id } });
        showSuccessAlert("The product was removed successfuly..");
      }
    } catch (error) {
    }
  };

  // CALCULATE TOTAL
  const calculateTotal = () => {
    dispatch({ type: CALCULATE_TOTAL });
  };

  // CLEAR CART
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  //HANDLE STRIPE
  const handleStripe = async () => {
    const stripe = await getStripe();
    const cart = {
      items: state.products,
      subtotal: state.subtotal,
      shippingFee: state.shippingFee,
      total: state.total,
    };
    const response = await axios.post(`/order/create-checkout-session`, cart);
    const data = response.data;
    stripe.redirectToCheckout({ sessionId: data.id });
  };

  // GET STRIPE
  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.REACT_APP_PUBLICKEY);
    }

    return stripePromise;
  };

  // CRETEAT NEW ADRESS
  const createAdress = async (adress) => {
    dispatch({ type: CREATE_ADRESS_BEGGING });
    try {
      const response = await axios.post("/adress/", adress);
      if (response.status === 201) {
        dispatch({ type: CREATE_ADRESS_SUCCESS, payload: response.data });
      }
    } catch (error) {
      dispatch({ type: CREATE_ADRESS_FAILED });
    }
  };
  // fetch adress
  const fetchAdress = async () => {
    dispatch({ type: FETCH_ADRESS_BEGGING });
    try {
      const response = await axios.get("/adress/");
      if (response.status === 200) {
        dispatch({ type: FETCH_ADRESS_SUCCESS, payload: response.data });
      }
    } catch (error) {
      dispatch({ type: FETCH_ADRESS_FAILED });
    }
  };
  // update adress
  const updateAdress = async (adress) => {
    dispatch({ type: UPDATE_ADRESS_BEGGING });
    try {
      const response = await axios.patch("/adress/", adress);
      if (response.status === 200) {
        dispatch({ type: UPDATE_ADRESS_SUCCESS, payload: response.data });
      }
    } catch (error) {
      dispatch({ type: UPDATE_ADRESS_FAILED });
    }
  };

  // TOGGLE ADRESS MODAL
  const toggleAdressModal = () => dispatch({ type: TOGGLE_ADRESS_MODAL });

  // GET ALL COUNTRIES
  const loadAllCountries = async () => {
    dispatch({ type: LOAD_ALL_COUNTRIES_BEGGING });
    try {
      const response = await axios.get(`https://restcountries.com/v2/all`);
      if (response.status === 200) {
        dispatch({
          type: LOAD_ALL_COUNTRIES_SUCCESS,
          payload: { countries: response.data },
        });
      }
    } catch (error) {
      dispatch({ type: LOAD_ALL_COUNTRIES_FAILED });
    }
  };
  return (
    <CartContext.Provider
      value={{
        ...state,
        calculateTotal,
        addToCart,
        showMyCart,
        clearCart,
        handleStripe,
        removeFromCart,
        removeProductFromCart,
        createAdress,
        fetchAdress,
        updateAdress,
        toggleAdressModal,
        loadAllCountries
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
