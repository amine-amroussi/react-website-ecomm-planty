import {
  ADD_REVIEW_BEGGING,
  ADD_REVIEW_FAILED,
  ADD_REVIEW_SUCCESS,
  CLEAR_FILTRED_PRODUCTS,
  CLEAR_SINGLE_PRODUCT,
  CRAETE_PRODUCT_BEGGING,
  CRAETE_PRODUCT_FAILED,
  CRAETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_BEGGING,
  DELETE_PRODUCT_FAILED,
  DELETE_PRODUCT_SUCCESS,
  EDIT_REVIEW_BEGGING,
  EDIT_REVIEW_FAILED,
  FETCH_ALL_PRODUCTS_BEGGING,
  FETCH_ALL_PRODUCTS_FAILED,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_FEATURED_PRODUCTS_BEGGING,
  FETCH_FEATURED_PRODUCTS_FAILED,
  FETCH_FEATURED_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_REVEIWS_FAILED,
  FETCH_PRODUCT_REVEIWS_SUCCESS,
  FETCH_PRODUCT_REVIEWS_BEGGING,
  FETCH_SINGLE_PRODUCT_BEGGING,
  FETCH_SINGLE_PRODUCT_FAILED,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FILTER_PRODUCTS,
  FIND_USER_REVIEW,
  SELECT_IMAGE,
  SELECT_SINGLE_PRODUCT,
  SET_CATEGORY,
  SET_FILTER_PRODUCTS,
  SET_SORT_PRODUCTS,
  SORT_PRODUCTS,
  TOGGLE_REVIEW_MODAL,
  UPDATE_PRODUCT_BEGGING,
  UPDATE_PRODUCT_FAILED,
  UPDATE_PRODUCT_SUCCESS,
  UPLOAD_PRODUCT_IMAGE_BEGGING,
  UPLOAD_PRODUCT_IMAGE_FAILED,
  UPLOAD_PRODUCT_IMAGE_SUCCESS,
} from "../actions";

const product_reducer = (state, action) => {
  /// UPLOAD IMAGE
  if (action.type === UPLOAD_PRODUCT_IMAGE_BEGGING) {
    return { ...state, loadingImage: true };
  }
  if (action.type === UPLOAD_PRODUCT_IMAGE_SUCCESS) {
    console.log(action.payload);
    const { image } = action.payload;
    return { ...state, loadingImage: false, uploadedImage: image };
  }
  if (action.type === UPLOAD_PRODUCT_IMAGE_FAILED) {
    return { ...state, loadingImage: false };
  }
  // CREATE PRODUCT
  if (action.type === CRAETE_PRODUCT_BEGGING) {
    return { ...state, loading: true };
  }
  if (action.type === CRAETE_PRODUCT_FAILED) {
    return { ...state, loading: false };
  }
  if (action.type === CRAETE_PRODUCT_SUCCESS) {
    const { product } = action.payload;
    return { ...state, products: [...state.products, product], loading: false };
  }
  //FETCH ALL PRODUCTS
  if (action.type === FETCH_ALL_PRODUCTS_BEGGING)
    return { ...state, loading: true };
  if (action.type === FETCH_ALL_PRODUCTS_FAILED)
    return { ...state, loading: false };
  if (action.type === FETCH_ALL_PRODUCTS_SUCCESS) {
    const { products } = action.payload;
    // get max price
    const prices = products.map((product) => product.price);
    const maxPrice = Math.max(...prices);
    const minPrice = Math.min(...prices);
    return {
      ...state,
      loading: false,
      products,
      filtredProducts: products,
      minPrice,
      maxPrice,
      filtredBy: { price: minPrice },
    };
  }

  //FEATURED PRODUCT
  if (action.type === FETCH_FEATURED_PRODUCTS_BEGGING)
    return { ...state, loading: true };
  if (action.type === FETCH_FEATURED_PRODUCTS_FAILED)
    return { ...state, loading: false };
  if (action.type === FETCH_FEATURED_PRODUCTS_SUCCESS) {
    const { featuredProducts } = action.payload;
    return { ...state, featuredProducts };
  }

  // DELETE PRODUCT
  if (action.type === DELETE_PRODUCT_BEGGING)
    return { ...state, laoding: true };
  if (action.type === DELETE_PRODUCT_FAILED)
    return { ...state, laoding: false };
  if (action.type === DELETE_PRODUCT_SUCCESS) {
    const { productId } = action.payload;
    const filterProduct = state.products.filter(
      (product) => product._id !== productId
    );
    return { ...state, products: [...filterProduct], laoding: false };
  }

  // FETCH SINGLE PRODUCT
  if (action.type === CLEAR_SINGLE_PRODUCT)
    return { ...state, singleProduct: {} };
  if (action.type === FETCH_SINGLE_PRODUCT_BEGGING)
    return { ...state, loading: true, singleProduct: {} };
  if (action.type === FETCH_SINGLE_PRODUCT_FAILED)
    return { ...state, loading: false, singleProduct: {} };
  if (action.type === FETCH_SINGLE_PRODUCT_SUCCESS) {
    const { product } = action.payload;
    return { ...state, singleProduct: product, loading: false };
  }
  // SELECT SINGLE PRODUCT
  if (action.type === SELECT_SINGLE_PRODUCT) {
    const { productId } = action.payload;
    const product = state.products.find((prod) => prod._id === productId);
    return { ...state, singleProduct: { ...product } };
  }
  // UPDATE PRODUCT
  if (action.type === UPDATE_PRODUCT_BEGGING)
    return { ...state, loading: true };
  if (action.type === UPDATE_PRODUCT_FAILED)
    return { ...state, loading: false };
  if (action.type === UPDATE_PRODUCT_SUCCESS) {
    const { product } = action.payload;
    let products = state.products.filter((prod) => prod._id !== product._id);
    products = [...products, product];
    return { ...state, products, loading: false };
  }

  // SELECT IMAGE
  if (action.type === SELECT_IMAGE) {
    const { image } = action.payload;
    return { ...state, uploadedImage: image };
  }

  // SORT PRODUCTS

  if (action.type === SET_SORT_PRODUCTS)
    return { ...state, sortedBy: action.payload?.sort };

  if (action.type === SORT_PRODUCTS) {
    const { sortedBy } = state;
    let tempProducts = [];
    if (sortedBy === "none")
      return { ...state, filtredProducts: [...state.filtredProducts] };
    if (sortedBy === "price-asc") {
      tempProducts = state.filtredProducts.sort((a, b) => b.price - a.price);
      return { ...state, filtredProducts: [...tempProducts] };
    }
    if (sortedBy === "price-desc") {
      tempProducts = state.filtredProducts.sort((a, b) => a.price - b.price);
      return { ...state, filtredProducts: [...tempProducts] };
    }
    if (sortedBy === "a-z") {
      tempProducts = state.filtredProducts.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      return { ...state, filtredProducts: [...tempProducts] };
    }
    if (sortedBy === "z-a") {
      tempProducts = state.filtredProducts.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      return { ...state, filtredProducts: [...tempProducts] };
    }
  }

  // FILTER PRODUCTS

  if (action.type === SET_FILTER_PRODUCTS) {
    const { name, value } = action.payload;
    return { ...state, filtredBy: { ...state.filtredBy, [name]: value } };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { filtredBy, products } = state;
    let tempProducts = [...products];

    if (filtredBy.title) {
      tempProducts = tempProducts.filter((product) =>
        product.title.toLowerCase().startsWith(filtredBy.title.toLowerCase())
      );
    }

    if (filtredBy.category) {
      tempProducts = tempProducts.filter(
        (product) => product.category === filtredBy.category
      );
    }

    tempProducts = tempProducts.filter(
      (product) => product.price >= filtredBy.price
    );

    return { ...state, filtredProducts: [...tempProducts] };
  }

  // TOGGLE MODAL REVIEW
  if (action.type === TOGGLE_REVIEW_MODAL) {
    const { isReviewModalOpened } = state;
    return { ...state, isReviewModalOpened: !isReviewModalOpened };
  }

  // ADD PRODUCT REVIEW
  if (action.type === ADD_REVIEW_BEGGING)
    return { ...state, reviewsLoading: true };
  if (action.type === ADD_REVIEW_FAILED)
    return { ...state, reviewsLoading: false };
  if (action.type === ADD_REVIEW_SUCCESS) {
    const { review, user } = action.payload;
    review.user = user;
    return {
      ...state,
      singleProductReview: [...state.singleProductReview, review],
      reviewsLoading: false,
    };
  }

  //

  // FETCH PRODUCT REVIEWS
  if (action.type === FETCH_PRODUCT_REVIEWS_BEGGING)
    return { ...state, reviewsLoading: true };
  if (action.type === FETCH_PRODUCT_REVEIWS_FAILED)
    return { ...state, reviewsLoading: false };
  if (action.type === FETCH_PRODUCT_REVEIWS_SUCCESS) {
    const { reviews } = action.payload;
    return { ...state, singleProductReview: reviews, reviewsLoading: false };
  }
  // FIND USER REVEIW
  if (action.type === FIND_USER_REVIEW) {
    const userId = action.payload?.userId;
    console.log(userId);
    const findReview = state.singleProductReview.find(
      (reveiw) => reveiw.user?._id === userId
    );
    console.log(findReview);
    return { ...state, singleUserReview: findReview };
  }

  // EDIT REVIEW
  if (action.type === EDIT_REVIEW_BEGGING) return { reviewsLoading: true };
  if (action.type === EDIT_REVIEW_FAILED) return { reviewsLoading: false };
  // if(action.type === EDIT_REVIEW_SUCCESS) {
  //   const {review} = action.payload
  //   const {singleProductReview} = state
  //   let tempReviews = []
  //   tempReviews = singleProductReview.map(rev => {
  //     if(rev._id === review._id) {
  //      return rev = review
  //     }
  //   })

  //   console.log(tempReviews)
  // }

  // SET CATEGORY
  if (action.type === SET_CATEGORY) {
    const { category } = action.payload;
    let tempProduct = [];
    tempProduct = state.products.filter((product) => {
      return product.category === category;
    });
    return {
      ...state,
      filtredBy: { ...state.filtredBy, category  },
      filtredProducts: tempProduct,
      loading : false
    };
  }

  // CLEAR FILTER PRODUCTS
  if(action.type === CLEAR_FILTRED_PRODUCTS) {
    const {products} = state
    return {...state, filtredProducts : products, loading : false}
  }

  return state;
};

export default product_reducer;
