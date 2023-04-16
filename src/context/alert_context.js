import React, { useContext, useReducer } from "react";
import {
  CLEAR_ALERT,
  SHOW_ERROR_ALERT,
  SHOW_PENDDING_ALERT,
  SHOW_SUCCESS_ALERT,
} from "../actions";
import reducer from "../reducer/alert_reducer";

const AlertContext = React.createContext();

const initialSatate = {
  message: "",
  isErrorAlert: false,
  isSuccessAlert: false,
  isPenddingAlert: false,
  showAlert: false,
};

export const AlertProvider = ({ children }) => {
  // SHOW SUCCESS ALERT
  const showSuccessAlert = (message) => {
    dispatch({ type: SHOW_SUCCESS_ALERT, payload: { message } });
    clearAlert();
  };

  // SHOW ERROR ALERT
  const showErrorAlert = (message) => {
    dispatch({ type: SHOW_ERROR_ALERT, payload: { message } });
    clearAlert();
  };

  // SHOW PENDDING ALERT
  const showPenddingAlert = (message) => {
    dispatch({ type: SHOW_PENDDING_ALERT, payload: { message } });
    clearAlert();
  };

  // CLEAR ALERT
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 6000);
  };

  const [state, dispatch] = useReducer(reducer, initialSatate);
  return (
    <AlertContext.Provider
      value={{
        ...state,
        showSuccessAlert,
        showErrorAlert,
        showPenddingAlert,
        clearAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
