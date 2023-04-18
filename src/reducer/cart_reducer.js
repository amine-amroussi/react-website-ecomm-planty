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

const cart_reducer = (state, action) => {
  //  ADD TO CART
  if (action.type === ADD_TO_CART_BEGGING) return { ...state, loading: true };
  if (action.type === ADD_TO_CART_FAILED) return { ...state, loading: false };
  if (action.type === ADD_TO_CART_SUCCESS) {
    const { products, total } = action.payload.cart;

    return { ...state, products: [...products], total };
  }

  // SHOW CURRENT USER CART
  if (action.type === SHOW_USER_CART_BEGGING)
    return { ...state, cartLoading: true };
  if (action.type === SHOW_USER_CART_FAILED)
    return { ...state, cartLoading: false };
  if (action.type === SHOW_USER_CART_SUCCESS) {
    if (action.payload.cart === null) {
      return { products: [], amount: 0, subtotal: 0, shippingFee: 0, total: 0 };
    }

    const { products, total } = action.payload?.cart;

    return { ...state, products: action.payload?.cart && products, total };
  }

  // REMOVE CART
  if (action.type === REMOVE_CART_BEGGING) {
  }
  if (action.type === REMOVE_CART_SUCCESS) {
    const { cart } = action.payload;
    return { ...state, products: cart.products };
  }

  // DELETE PRODUCT FROM CART
  if (action.type === REMOVE_PRODUCT_FROM_CART) {
    const { _id } = action.payload;
    const products = state.products.filter((prod) => prod.product !== _id);
    return { ...state, products };
  }

  // CALCULATE
  if (action.type === CALCULATE_TOTAL) {
    let subtotal = 0;
    let total = 0;
    let shippingFee = 0;

    const { products } = state;
    // subtotal cost
    subtotal = products.reduce((subtotal, item) => {
      const { price, amount } = item;
      subtotal += price * amount;
      return subtotal;
    }, subtotal);

    // shippingFee
    shippingFee = products.reduce((shippingFee, item) => {
      const { shippingCost, amount } = item;
      shippingFee += shippingCost * amount;
      return shippingFee;
    }, shippingFee);

    // total
    total = shippingFee + subtotal;

    return { ...state, shippingFee, subtotal, total };
  }

  // CLEAR CART
  if (action.type === CLEAR_CART) {
    return { products: [], amount: 0, subtotal: 0, shippingFee: 0, total: 0 };
  }

  // CREATE ADRESS
  if (action.type === CREATE_ADRESS_BEGGING) return { ...state, loading: true };
  if (action.type === CREATE_ADRESS_FAILED) return { ...state, loading: false };
  if (action.type === CREATE_ADRESS_SUCCESS) {
    const { adress } = action.payload;
    return { ...state, adress };
  }

  // FETCH ADRESS
  if (action.type === FETCH_ADRESS_BEGGING) return { ...state, loading: true };
  if (action.type === FETCH_ADRESS_FAILED) return { ...state, loading: false };
  if (action.type === FETCH_ADRESS_SUCCESS) {
    const { adress } = action.payload;
    return { ...state, adress };
  }

  // UPDATE ADRESS
  if (action.type === UPDATE_ADRESS_BEGGING) return { ...state, loading: true };
  if (action.type === UPDATE_ADRESS_FAILED) return { ...state, loading: false };
  if (action.type === UPDATE_ADRESS_SUCCESS) {
    const { adress } = action.payload;
    return { ...state, adress };
  }
  // TOGGLE THE ASRESS MODAL
  if (action.type === TOGGLE_ADRESS_MODAL)
    return { ...state, isAdressModalOpened: !state.isAdressModalOpened };

  // LOAD COUNTRIES
  if (action.type === LOAD_ALL_COUNTRIES_SUCCESS) {
    const { countries } = action.payload;
    return { ...state, allCountries: countries };
  }

  return state;
};

export default cart_reducer;
