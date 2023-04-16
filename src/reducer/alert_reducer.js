import {
  CLEAR_ALERT,
  SHOW_ERROR_ALERT,
  SHOW_PENDDING_ALERT,
  SHOW_SUCCESS_ALERT,
} from "../actions";

const alert_reducer = (state, action) => {
  // SHOW ERROR ALERT
  if (action.type === SHOW_ERROR_ALERT) {
    const { message } = action.payload;
    return { ...state, message, isErrorAlert: true, showAlert: true };
  }
  // SHOW SUCCESS ALERT
  if (action.type === SHOW_SUCCESS_ALERT) {
    const { message } = action.payload;
    return { ...state, isSuccessAlert: true, message, showAlert: true };
  }

  // SHOW PENDDING ALERT
  if (action.type === SHOW_PENDDING_ALERT) {
    const { message } = action.payload;
    return { ...state, isPenddingAlert: true, message, showAlert: true };
  }

  // CLEAR ALERT
  if (action.type === CLEAR_ALERT)
    return {
      message: "",
      isErrorAlert: false,
      isSuccessAlert: false,
      isPenddingAlert: false,
      showAlert: false,
    };
  return state;
};

export default alert_reducer;
