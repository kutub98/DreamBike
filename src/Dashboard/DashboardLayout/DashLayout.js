import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import { FaFolderPlus, FaUsers } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import sller from "../../Asset/icons/seller.svg";
import buyer from "../../Asset/icons/buyer.svg";
import reported from "../../Asset/icons/reported.svg";
import myProduct from "../../Asset/icons/myProduct.svg";

import useAdmin from "../../Hook/useAdmin";
import DashNav from "../DashNav/DashNav";
import useSeller from "../../Hook/useSeller";
import { authContext } from "../../Context/AuthContext/AuthContext";

const DashLayout = () => {
  const { user } = useContext(authContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

 
  
  return (
    <div className="">
      {/* <Navbar></Navbar> */}
      <DashNav></DashNav>
      <div className="drawer drawer-mobile px-[5%]">
        <input id="dashBoardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        
        <div className="drawer-side border-r-2 border-b-gray-300 ">
          
          <label htmlFor="dashBoardDrawer" className="drawer-overlay "></label>
          <div className=" w-24 my-2 mx-auto h-24 rounded-full bg-slate-300">
            <div className="img w-full h-full overflow-hidden">
              <img src={user?.photoURL} alt="" className="img w-56 h-w-56 rounded-full overflow-hidden"/>
              <h1 className="mt-8">{user?.displayName}</h1>
            </div>
          </div>
          <ul className="menu mb-32 bg-gray-100 p-4 w-56 text-base-content">
            <li className="text-gray-700 font-bold">
              <Link to="/DashBoard">
                {" "}
                <BsFillCartPlusFill className="w-6 h-6" />
                My Orders
              </Link>
            </li>

            {
              isSeller &&  <>
              
              <li className="text-gray-700 font-bold">
              <Link to="/Dashboard/AddProduct">
                <img src={myProduct} alt="" className="w-6 h-6" />
                Add A product
              </Link>
            </li>
            <li className="text-gray-700 font-bold">
              <Link to="/Dashboard/MyProduct">
                {" "}
                <FaFolderPlus className="w-6 h-6" />
                My Products
              </Link>
            </li>
              </>
            }

            {
              isAdmin &&  <>
              <li className="text-gray-700 font-bold">
              <Link to="/Dashboard/AddProduct">
                <img src={myProduct} alt="" className="w-6 h-6" />
                Add A product
              </Link>
            </li>
            <li className="text-gray-700 font-bold">
              <Link to="/Dashboard/MyProduct">
                {" "}
                <FaFolderPlus className="w-6 h-6" />
                My Products
              </Link>
            </li>
              <li className="text-gray-700 font-bold text-xl">
              <Link to="/Dashboard/AllUsers">
                {" "}
                <FaUsers className="w-6 h-6" />
                All Users
              </Link>
            </li>

            <li className="text-gray-700 font-bold">
              <Link to="/Dashboard/AllSeller">
                {" "}
                <img src={sller} alt="" className="w-6 h-6" />
                All Sellers
              </Link>
            </li>
            <li className="text-gray-700 font-bold">
              <Link to="/DashBoard/AllBuyers">
                {" "}
                <img src={buyer} alt="" className="w-6 h-6" />
                All Buyers
              </Link>
            </li>
            <li className="text-gray-700 font-bold">
              <Link to="/DashBoard/Reported">
                {" "}
                <img src={reported} alt="" className="w-6 h-6" />
                Reported Items
              </Link>
            </li>
              
              </>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
