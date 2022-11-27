import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import { FaFolderPlus , FaUsers} from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import sller from "../../Asset/icons/seller.svg";
import buyer from "../../Asset/icons/buyer.svg";
import reported from "../../Asset/icons/reported.svg";
import myProduct from "../../Asset/icons/myProduct.svg";
const DashLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashBoardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashBoardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li className="text-gray-700 font-bold text-lg">
              <Link to="/DashBoard">
                {" "}
                <BsFillCartPlusFill className="w-8 h-8" />
                My Orders
              </Link>
            </li>

            <>
              <li className="text-gray-700 font-bold text-lg">
                <Link to="/Dashboard/AddProduct">
                  <img src={myProduct} alt="" className="w-8 h-8" />
                  Add A product
                </Link>
              </li>
              <li className="text-gray-700 font-bold text-lg">
                <Link to="/Dashboard/MyProduct">
                  {" "}
                  <FaFolderPlus className="w-8 h-8" />
                  My Products
                </Link>
              </li>
              <li className="text-gray-700 font-bold text-xl">
                <Link to="/Dashboard/AllUsers">
                  {" "}
                  <FaUsers className="w-8 h-8"/>
                 
                  All Users
                </Link>
              </li>
              <li className="text-gray-700 font-bold text-lg">
                <Link to="/Dashboard/AllSeller">
                  {" "}
                  <img src={sller} alt="" className="w-8 h-8" />
                  All Sellers
                </Link>
              </li>
              <li className="text-gray-700 font-bold text-lg">
                <Link to="/DashBoard/AllBuyers">
                  {" "}
                  <img src={buyer} alt="" className="w-8 h-8" />
                  All Buyers
                </Link>
              </li>
              <li className="text-gray-700 font-bold text-lg">
                <Link to="/DashBoard/Reported">
                  {" "}
                  <img src={reported} alt="" className="w-8 h-8" />
                  Reported Items
                </Link>
              </li>
            </>
          </ul>
        </div>
      </div>

      
    </div>
  );
};

export default DashLayout;
