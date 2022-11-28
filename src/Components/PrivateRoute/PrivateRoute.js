import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { authContext } from "../../Context/AuthContext/AuthContext";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
    const location = useLocation()

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse bg-red-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-red-600"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-red-600"></div>
        </div>
      </>
    );
  }
  if (user) {
    return children
  }
  return <Navigate to="/Login" state={{from: location}} replace ></Navigate>
};

export default PrivateRoute;
