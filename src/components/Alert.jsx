import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useAlertContext } from "../context/alert_context";
import "react-toastify/dist/ReactToastify.css";

const Alert = () => {
  const { isErrorAlert, isSuccessAlert, isPenddingAlert, message, showAlert } =
    useAlertContext();

  const toastObj = {
    position: "bottom-right",
    autoClose: 4000,
    closeOnClick: true,
    pauseOnHover: true,
    theme: "light",
    hideProgressBar: false,
  };

  useEffect(() => {
    const setAlert = () => {
      if (isErrorAlert) {
        return toast.error(message, toastObj);
      }
      if (isSuccessAlert) {
        return toast.success(message, toastObj);
      }
      if (isPenddingAlert) {
        toastObj.autoClose = false;
        return toast.loading(message, toastObj);
      }
    };
    setAlert();
    // eslint-disable-next-line
  }, [showAlert]);

  if (showAlert) {
    return (
      <>
        <ToastContainer />
      </>
    );
  }
};

export default Alert;
