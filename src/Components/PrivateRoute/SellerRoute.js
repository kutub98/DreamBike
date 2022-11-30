import React, { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/AuthContext/AuthContext";

import useSeller from "../../Hook/useSeller";
import Loading from "../Loading/Loading";

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const [isSeller , isSellerLoading] = useSeller(user?.email);
    const location = useLocation();
    


    if(loading || isSellerLoading){
        return <h1>loading...</h1>
    }

    if (user && isSeller) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
