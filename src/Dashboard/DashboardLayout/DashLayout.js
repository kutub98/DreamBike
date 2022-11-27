import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import { FaFolderPlus } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import sller from '../../Asset/icons/seller.svg'
import buyer from '../../Asset/icons/buyer.svg'
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
            <li>
              <Link to="/DashBoard">
                {" "}<BsFillCartPlusFill className="w-8 h-8"  />
                My Orders
              </Link>
            </li>
            
              <>
                <li>
                  <Link to="/Dashboard/AddProduct">
                    {" "} <FaFolderPlus className="w-8 h-8" />
                    Add A product
                  </Link>
                </li>
                <li>
                  <Link to="/Dashboard/AddProduct">
                    {" "}
                    <img src={sller} alt="" className="w-8 h-8" />
                    All Sellers
                  </Link>
                </li>
                <li>
                  <Link to="/DashBoard/ManageDoctor">
                    {" "}
                    <img src={buyer} alt="" className="w-8 h-8" />
                    All Buyers
                  </Link>
                </li>
              </>
           
          </ul>
        </div>
      </div>

      <Footer></Footer>
    </div>
    );
};

export default DashLayout;