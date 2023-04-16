import React, { useContext, useReducer } from "react";

import {
  CHANGE_PASSWORD_BEGGING,
  CHANGE_PASSWORD_FAILED,
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
import user_reducer from "../reducer/user_reducer";
import axios from "../util/axios";
import { useAlertContext } from "./alert_context";


const initialState = {
  user: {},
  isAuth: false,
  loading: false,
  isDropDownActive: false,
  isMobileMenuActive: false,
  isSideBarActive: false,
  isFilterBarOpen : false,
};

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(user_reducer, initialState);

  const {showSuccessAlert, showErrorAlert} = useAlertContext()

  // REGISTER
  const register = async ({ user }) => {
    dispatch({ type: REGISTER_BEGGING });
    try {
      const response = await axios.post("/auth/register", user);
      if (response.status === 201) {
        dispatch({ type: REGISTER_SUCCESS, payload: response.data });
        showSuccessAlert('Welcome, to plants lovers.')
      }
    } catch (error) {
      dispatch({ type: REGISTER_FAILED });
      console.log(error)
      showErrorAlert(error.response.data.msg)
    }
  };

  // LOGIN
  const login = async ({ user }) => {
    dispatch({ type: LOGIN_BEGGING });
    try {
      const response = await axios.post("/auth/login", user);
      if (response.status === 200) {
        dispatch({ type: LOGIN_SUCCESS, payload: response.data });
        showSuccessAlert('Welcome back !')
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAILED });
      console.log(error)
      showErrorAlert(error.response.data.msg)
    }
  };
  // SHOW CURRENT USER
  const showCurrentUser = async () => {
    dispatch({ type: SHOW_CURRENT_USER_BEGGING });
    try {
      const response = await axios.get("/user/showMe");
      console.log(response);
      if (response.status === 200) {
        dispatch({ type: SHOW_CURRENT_USER_SUCCESS, payload: response.data });
      }
    } catch (error) {
      dispatch({ type: SHOW_CURRENT_USER_FAILED });
      console.log(error);
    }
  };

  // TOGGLE DROP DOWN
  const toggleDropDown = () => {
    dispatch({ type: TOGGLE_DROPDOWN });
  };

  // TOGGLE SIDEBAR
  const toggleSideBar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  // TOGGLE MOBILE MENU
  const toggleMenuMobile = () => {
    dispatch({ type: TOGGLE_MOBILE_MENU });
  };

  // LOGOUT
  const logout = async () => {
    dispatch({ type: LOGOUT_BEGGING });
    try {
      const response = await axios.get("/auth/logout");
      if (response.status === 200) {
        dispatch({ type: LOGOUT_SUCCESS });
        // clearCart()
        showSuccessAlert('Logging out.')
      }
    } catch (error) {
      showErrorAlert(error.response.data.msg)
      dispatch({ type: LOGOUT_FAILED });
    }
  };

  // UDPATE USER
  const updateUser = async ({ user }) => {
    dispatch({ type: UPDATE_USER_BEGGING });
    console.log(user)
    try {
      const response = await axios.patch(`/user/${state.user._id}`, user);
      console.log(response)
      if (response.status === 200) {
        dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data });
      }
    } catch (error) {
      dispatch({ type: UPDATE_USER_FAILED });
      console.log(error);
    }
  };

  // CHANGE PASSWORD
  const changePassword = async ({userPasswords}) => {
    dispatch({type : CHANGE_PASSWORD_BEGGING})
    console.log(userPasswords)
    try {
      const response = await axios.patch(`/user/changePassword` , userPasswords)
      if(response.status === 200) {
        console.log(response.data)
      }
    } catch (error) {
      dispatch({type : CHANGE_PASSWORD_FAILED})
      console.log(error)
    }
  }

  // TOGGLE FILTER BAR 
  const toggleFilterBar = () => {
    dispatch({type : TOGGLE_FILTERBAR})
  }

  return (
    <UserContext.Provider
      value={{
        ...state,
        register,
        login,
        showCurrentUser,
        toggleDropDown,
        toggleMenuMobile,
        toggleSideBar,
        logout,
        updateUser,
        changePassword,
        toggleFilterBar
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
