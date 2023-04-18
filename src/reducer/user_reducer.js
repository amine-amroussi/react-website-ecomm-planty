import {
  CHANGE_PASSWORD_BEGGING,
  CHANGE_PASSWORD_FAILED,
  FETCH_ALL_USERS_BEGGING,
  FETCH_ALL_USERS_FAILED,
  FETCH_ALL_USERS_SUCCESS,
  LOGIN_BEGGING,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_BEGGING,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS,
  REGISTER_BEGGING,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  SHOW_CURRENT_USER_BEGGING,
  SHOW_CURRENT_USER_FAILED,
  SHOW_CURRENT_USER_SUCCESS,
  TOGGLE_DROPDOWN,
  TOGGLE_FILTERBAR,
  TOGGLE_MOBILE_MENU,
  TOGGLE_SIDEBAR,
  UPDATE_USER_BEGGING,
  UPDATE_USER_FAILED,
  UPDATE_USER_SUCCESS,
} from "../actions";

const user_reducer = (state, action) => {
  // REGISTER
  if (action.type === REGISTER_BEGGING) {
    return { ...state, loading: true };
  }
  if (action.type === REGISTER_SUCCESS) {
    const { user } = action.payload;
    return { ...state, isAuth: true, user, loading: false };
  }
  if (action.type === REGISTER_FAILED) {
    return { ...state, loading: false };
  }
  // LOGIN
  if (action.type === LOGIN_BEGGING) {
    return { ...state, loading: true };
  }
  if (action.type === LOGIN_SUCCESS) {
    const { user } = action.payload;
    return { ...state, loading: false, user, isAuth: true };
  }
  if (action.type === LOGIN_FAILED) {
    return { ...state, loading: false };
  }
  // SHOW CURRENT USER
  if (action.type === SHOW_CURRENT_USER_BEGGING) {
    return { ...state, loading: true };
  }
  if (action.type === SHOW_CURRENT_USER_SUCCESS) {
    const { user } = action.payload;
    return { ...state, user: user, isAuth: true, loading: false };
  }
  if (action.type === SHOW_CURRENT_USER_FAILED) {
    return { ...state, loading: false };
  }

  // DROPDOWN
  if (action.type === TOGGLE_DROPDOWN) {
    return { ...state, isDropDownActive: !state.isDropDownActive };
  }

  // MENU MOBILE
  if (action.type === TOGGLE_MOBILE_MENU) {
    return { ...state, isMobileMenuActive: !state.isMobileMenuActive };
  }

  // SIDEBAR
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, isSideBarActive: !state.isSideBarActive };
  }

  // LOGOUT
  if (action.type === LOGOUT_BEGGING) {
    return { ...state, loading: true };
  }

  if (action.type === LOGOUT_SUCCESS) {
    return { isAuth: false, user: {} };
  }

  if (action.type === LOGOUT_FAILED) {
    return { ...state, loading: false };
  }

  //  UPDATE USER
  if (action.type === UPDATE_USER_BEGGING) {
    return { ...state, loading: true };
  }

  if (action.type === UPDATE_USER_SUCCESS) {
    const { user } = action.payload;
    return { ...state, loading: false, user };
  }

  if (action.type === UPDATE_USER_FAILED) {
    return { ...state, loading: false };
  }

  // CHANGE PASSWORD
  if (action.type === CHANGE_PASSWORD_BEGGING) {
    return { ...state, laoding: true };
  }

  if (action.type === CHANGE_PASSWORD_FAILED) {
    return { ...state, laoding: false };
  }

  // TOGGLE FILTER BAR
  if (action.type === TOGGLE_FILTERBAR) {
    let { isFilterBarOpen } = state;
    isFilterBarOpen = !isFilterBarOpen;
    return { ...state, isFilterBarOpen: isFilterBarOpen };
  }

  //FETCH ALL USERS
  if (action.type === FETCH_ALL_USERS_BEGGING) {
    console.log(`the was exec`)
    return { ...state, loading: true };
  }

  if (action.type === FETCH_ALL_USERS_FAILED) {
    return { ...state, loading: false };
  }

  if (action.type === FETCH_ALL_USERS_SUCCESS) {
    const { users } = action.payload;

    console.log(action.payload);
    return { ...state, allUsers: [...users], loading: false };
  }

  return state;
};

export default user_reducer;
