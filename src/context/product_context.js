import React, { useContext, useEffect, useReducer } from "react";
import {
  CRAETE_PRODUCT_BEGGING,
  CRAETE_PRODUCT_FAILED,
  CRAETE_PRODUCT_SUCCESS,
  UPLOAD_PRODUCT_IMAGE_BEGGING,
  UPLOAD_PRODUCT_IMAGE_FAILED,
  UPLOAD_PRODUCT_IMAGE_SUCCESS,
  FETCH_ALL_PRODUCTS_BEGGING,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_FAILED,
  DELETE_PRODUCT_BEGGING,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_BEGGING,
  FETCH_SINGLE_PRODUCT_FAILED,
  CLEAR_SINGLE_PRODUCT,
  SELECT_SINGLE_PRODUCT,
  UPDATE_PRODUCT_BEGGING,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILED,
  SELECT_IMAGE,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
  SET_SORT_PRODUCTS,
  SET_FILTER_PRODUCTS,
  ADD_REVIEW_BEGGING,
  ADD_REVIEW_SUCCESS,
  TOGGLE_REVIEW_MODAL,
  FETCH_PRODUCT_REVIEWS_BEGGING,
  FETCH_PRODUCT_REVEIWS_SUCCESS,
  FETCH_PRODUCT_REVEIWS_FAILED,
  FIND_USER_REVIEW,
  EDIT_REVIEW_BEGGING,
  EDIT_REVIEW_SUCCESS,
  EDIT_REVIEW_FAILED,
  FETCH_FEATURED_PRODUCTS_BEGGING,
  FETCH_FEATURED_PRODUCTS_SUCCESS,
  FETCH_FEATURED_PRODUCTS_FAILED,
  SET_CATEGORY,
  CLEAR_FILTRED_PRODUCTS,
} from "../actions";
import reducer from "../reducer/product_reducer";
import axios from "../util/axios";
import { useAlertContext } from "./alert_context";
import { useUserContext } from "./user_context";

const initialState = {
  products: [],
  featuredProducts: [],
  singleProduct: { image: "", title: "", price: "" },
  uploadedImage: "",
  loadingImage: false,
  loading: false,
  maxPrice: 0,
  minPrice: 0,
  sortedBy: "",
  filtredBy: {
    title: "",
    category: "",
    freeShipping: false,
    price: 0,
  },
  singleProductReview: [],
  isReviewModalOpened: false,
  reviewsLoading: false,
  singleUserReview: null,
};

const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user } = useUserContext();
  const { showSuccessAlert, showErrorAlert } = useAlertContext();

  useEffect(() => {
    fetchAllProducts();
    fetchFeaturedProducts();
    // eslint-disable-next-line
  }, [state.prducts]);

  // UPLOAD IMAGE
  const uploadImage = async ({ imageFile }) => {
    dispatch({ type: UPLOAD_PRODUCT_IMAGE_BEGGING });
    try {
      const response = await axios.post("/product/uploadImage", imageFile);
      if (response.status === 200) {
        showSuccessAlert("The product image was uploaded!");
        dispatch({
          type: UPLOAD_PRODUCT_IMAGE_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error) {
      showErrorAlert(error.response?.data.msg);
      dispatch({ type: UPLOAD_PRODUCT_IMAGE_FAILED });
    }
  };

  // CREATE PRODUCT
  const createProduct = async ({ product }) => {
    dispatch({ type: CRAETE_PRODUCT_BEGGING });
    try {
      product.image = state.uploadedImage;
      const response = await axios.post(`/product`, product);
      if (response.status === 201) {
        dispatch({ type: CRAETE_PRODUCT_SUCCESS, payload: response.data });
        showSuccessAlert("The product was created successfuly!");
      }
    } catch (error) {
      dispatch({ type: CRAETE_PRODUCT_FAILED });
      showErrorAlert(error.response.data.msg);
    }
  };

  // FETCH ALL PRODUCTS
  const fetchAllProducts = async () => {
    dispatch({ type: FETCH_ALL_PRODUCTS_BEGGING });
    try {
      const response = await axios.get("/product");
      if (response.status === 200) {
        dispatch({ type: FETCH_ALL_PRODUCTS_SUCCESS, payload: response.data });
      }
    } catch (error) {
      dispatch({ type: FETCH_ALL_PRODUCTS_FAILED });
      showErrorAlert(error.response.data.msg);
    }
  };

  // FETCH FEATURED PRODUCTS
  const fetchFeaturedProducts = async () => {
    dispatch({ type: FETCH_FEATURED_PRODUCTS_BEGGING });
    try {
      const response = await axios.get(`/product/featuredProducts`);
      if (response.status === 200) {
        dispatch({
          type: FETCH_FEATURED_PRODUCTS_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error) {
      dispatch({ type: FETCH_FEATURED_PRODUCTS_FAILED });
    }
  };

  // DELETE PRODUCT
  const deleteProduct = async ({ productId }) => {
    dispatch({ type: DELETE_PRODUCT_BEGGING });
    try {
      const response = await axios.delete(`/product/${productId}`);
      if (response.status === 200) {
        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: { productId } });
      }
      showSuccessAlert("The product was deleted successfuly !");
    } catch (error) {
      showErrorAlert(error.response.data.msg);
      dispatch({ type: DELETE_PRODUCT_FAILED });
    }
  };

  // FETCH SINGLE PRODUCT
  const fetchSingleProduct = async ({ productId }) => {
    dispatch({ type: FETCH_SINGLE_PRODUCT_BEGGING });
    try {
      const response = await axios.get(`/product/${productId}`);
      if (response.status === 200) {
        dispatch({
          type: FETCH_SINGLE_PRODUCT_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error) {
      showErrorAlert(error.response.data.msg);
      dispatch({ type: FETCH_SINGLE_PRODUCT_FAILED });
    }
  };

  // CLEAR PRODUCTS
  const clearSingleProduct = () => {
    dispatch({ type: CLEAR_SINGLE_PRODUCT });
  };

  // SELECT SINGLE PRODUCT
  const selectSingleProduct = ({ productId }) => {
    dispatch({ type: SELECT_SINGLE_PRODUCT, payload: { productId } });
  };

  // UPDATE PRODUCT
  const updateProduct = async ({ productId, productData }) => {
    dispatch({ type: UPDATE_PRODUCT_BEGGING });
    try {
      productData.image = state.uploadedImage;
      const response = await axios.patch(`/product/${productId}`, productData);
      if (response.status === 200) {
        dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: response.data });
        showSuccessAlert("The product updated successfuly !");
      }
    } catch (error) {
      showErrorAlert(error.response.data.msg);
      dispatch({ type: UPDATE_PRODUCT_FAILED });
    }
  };

  // SELECT IMAGE
  const selectImage = ({ image }) => {
    dispatch({ type: SELECT_IMAGE, payload: { image } });
  };

  // SORRT PRODUCTS
  const sortProducts = (sort) => {
    dispatch({ type: SET_SORT_PRODUCTS, payload: { sort } });
    dispatch({ type: SORT_PRODUCTS });
  };

  // FILTER PRODUCTS
  const filterProducts = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: SET_FILTER_PRODUCTS, payload: { name, value } });
    dispatch({ type: FILTER_PRODUCTS });
  };

  const clearFilterProducts = () => {
    dispatch({type : CLEAR_FILTRED_PRODUCTS})
  }

  // TOGGLE REVIEW MODAL
  const toggleReviewModal = () => {
    dispatch({ type: TOGGLE_REVIEW_MODAL });
  };

  // ADD PRODUCT REVIEW
  const addReview = async ({ review }) => {
    dispatch({ type: ADD_REVIEW_BEGGING });
    try {
      const response = await axios.post("/reviews/", review);
      if (response.status === 201) {
        dispatch({
          type: ADD_REVIEW_SUCCESS,
          payload: { review: response.data.review, user: user },
        });
        toggleReviewModal();
      }
    } catch (error) {
    }
  };

  // EDIT REVIEW
  const editReview = async ({ review }) => {
    dispatch({ type: EDIT_REVIEW_BEGGING });
    try {
      const response = await axios.patch(`/reviews/${review._id}`, review);
      if (response.status === 200) {
        dispatch({ type: EDIT_REVIEW_SUCCESS, payload: response.data });
      }
    } catch (error) {
      dispatch({ type: EDIT_REVIEW_FAILED });
    }
  };

  // FETCH PRODUCT REVIEWS
  const fetchProductReviews = async ({ productId }) => {
    dispatch({ type: FETCH_PRODUCT_REVIEWS_BEGGING });
    try {
      const response = await axios.get(`product/${productId}/review/`);
      if (response.status === 200) {
        dispatch({
          type: FETCH_PRODUCT_REVEIWS_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error) {
      dispatch({ type: FETCH_PRODUCT_REVEIWS_FAILED });
    }
  };

  // FIND USER REVEIW
  const findUserReview = () => {
    dispatch({ type: FIND_USER_REVIEW, payload: { userId: user?._id } });
  };

  // SET THE CATEGORY
  const setCategory = (category) => {
    dispatch({type : SET_CATEGORY , payload : {category}})
  }

  return (
    <ProductContext.Provider
      value={{
        ...state,
        uploadImage,
        selectImage,
        createProduct,
        fetchAllProducts,
        deleteProduct,
        clearSingleProduct,
        fetchSingleProduct,
        fetchFeaturedProducts,
        selectSingleProduct,
        updateProduct,
        sortProducts,
        filterProducts,
        toggleReviewModal,
        addReview,
        fetchProductReviews,
        findUserReview,
        editReview,
        setCategory ,
         clearFilterProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
