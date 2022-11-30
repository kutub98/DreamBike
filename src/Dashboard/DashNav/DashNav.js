import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo2 from "../../Asset/logo/white.png";
import logo1 from "../../Asset/logo/logo2.png";
import  '../../Shared/Navbar/Navbar.css'
import { MdFormatAlignLeft as RiBarChartHorizontalLine } from "react-icons/md";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { authContext } from "../../Context/AuthContext/AuthContext";
import useAdmin from "../../Hook/useAdmin";
import useSeller from "../../Hook/useSeller";
const DashNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  // const [openMenu, setOpenMenu] = useState(true);
  const { user, LogOut, logout } = useContext(authContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const navigate = useNavigate()

  // console.log(user)
  const signOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
      navigate('/login')
  };

  const menuItem = (
    <React.Fragment>
      <li className="p-2 " onClick={() => setOpenMenu(!openMenu)}>
        <Link className=" text-[14px] mx-0" to="/Home">
         Main Home
        </Link>
      </li>
      
      <li className="p-2 " onClick={() => setOpenMenu(!openMenu)}>
        <Link className=" text-[14px] mx-0" to="/Dashboard/MyOrders">
          My Orders{" "}
        </Link>
      </li>
      {
        isSeller && <>
        <li className="p-2 " onClick={() => setOpenMenu(!openMenu)}>
        <Link className=" text-[14px] mx-0" to="/Dashboard/MyProduct">
          My Products{" "}
        </Link>
      </li>
      <li className="p-2 " onClick={() => setOpenMenu(!openMenu)}>
        <Link className=" text-[14px] mx-0" to="/Dashboard/AddProduct">
          Add Products{" "}
        </Link>
      </li>
        </>
      }
      {
        isAdmin && <>
        <li className="p-2 " onClick={() => setOpenMenu(!openMenu)}>
        <Link className=" text-[14px] mx-0" to="/Dashboard/AllUsers">
          All Users{" "}
        </Link>
      </li>
      <li className="p-2 " onClick={() => setOpenMenu(!openMenu)}>
        <Link to="/Dashboard/AllSeller" className=" text-[14px] mx-0">
          All Sellers
        </Link>
      </li>
      <li className="p-2 " onClick={() => setOpenMenu(!openMenu)}>
        <Link className=" text-[14px] mx-0" to="/DashBoard/AllBuyers">
          All Buyers
        </Link>
      </li>
      <li className="p-2 " onClick={() => setOpenMenu(!openMenu)}>
        <Link className=" text-[14px] mx-0" to="/DashBoard/Reported">
          Reported Items
        </Link>
      </li>
        </>
      }
      <li  className="p-2  text-[14px] mx-0 bg-red-600 rounded text-white" onClick={() => setOpenMenu(!openMenu)}>
        <Link onClick={signOut} className="" to="/Blog">
          Log out
        </Link>
      </li>
    </React.Fragment>
  );

  return (
    <div className="navBar bg-black">
      <nav className=" flex justify-between py-6 px-[8%] items-center">
        <div className="logo flex">
          <Link to="/home">
            <img src={logo2} alt="" className=" logo1 w-56 h-20" />
          </Link>
          <label htmlFor="dashBoardDrawer">
            <RiBarChartHorizontalLine className="logo2 w-8 h-8 text-white"></RiBarChartHorizontalLine>
          </label>
          <Link to="/home">
            <img src={logo1} alt="" className=" logo2 w-36 h-16" />
            {/* <div className=" drawer-mobile">
              <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                  Open drawer
                </label>
              </div>
            </div> */}
          </Link>
        </div>
        {openMenu ? <ul className="menuItem">{menuItem}</ul> : <ul className="menuItem">{menuItem}</ul>}
        <div className="relative BarsBar" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? (
            <button className="bars">
              <FaBars className="w-6 h-6 text-white" />
            </button>
          ) : (
            <button className="closeBar">
              <FaWindowClose className="w-6 h-6 text-white" />
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default DashNav;
