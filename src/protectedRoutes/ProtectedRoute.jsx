import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  } else {
    return <Outlet />;
  }
};

export default ProtectedRoute;
