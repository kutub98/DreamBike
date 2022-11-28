import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../../Context/AuthContext/AuthContext";

import useAdmin from "../../Hook/UseAdmin";


const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.userRole ==='admin');
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <h1>Loading...............</h1>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
