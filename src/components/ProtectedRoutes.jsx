import React from "react";
import { useUserContext } from "../context/user_context";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { isAuth, user } = useUserContext();
  if (!isAuth || !user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoutes;
