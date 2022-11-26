import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "../../Asset/logo/white.png";
import logo1 from "../../Asset/logo/logo2.png";
import "./Navbar.css";
import { MdFormatAlignLeft as RiBarChartHorizontalLine } from "react-icons/md";
import { FaUserAlt, FaSignOutAlt, FaMoon, FaSun } from "react-icons/fa";
import { FaBars, FaWindowClose } from "react-icons/fa";

import { authContext } from "../../Context/AuthContext/AuthContext";
const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  // const [openMenu, setOpenMenu] = useState(true);
  const [openDashBoard, setOpenDashboard] = useState(false);
  const { user, LogOut, logout } = useContext(authContext);
  
// console.log(user)
  const LogOUT =()=>{
    logout()
    .then(()=>{})
    .catch(error=>console.log(error))
  }
  
  const dashboardMenu = (
    <React.Fragment className="flex items-center">
      <li className="flex items-center p-3">
        <Link onClick={()=> setOpenMenu(!openMenu)} to="/DashBoard" className="flex items-center">
          {" "}
          <FaUserAlt /> View Profile
        </Link>
      </li>
      <li className="flex p-3 bg-red-700 items-center">
        <Link onClick={()=> setOpenMenu(!openMenu)} className="flex items-center text-white">
          {" "}
          <FaSignOutAlt />
          Log out
        </Link>
      </li>
    </React.Fragment>
  );
  const menuItem = (
    <React.Fragment>
      <li className=" p-3" onClick={() => setOpenMenu(!openMenu)}>
        <Link className=" text-xl" to="/Home">
          Home
        </Link>
      </li>
      <li className=" p-3" onClick={() => setOpenMenu(!openMenu)}>
        <Link className=" text-xl" to="/Brand">
          Brand
        </Link>
      </li>
      <li className=" p-3" onClick={() => setOpenMenu(!openMenu)}>
        <Link to="/Categories" className=" text-xl">
          Categories
        </Link>
      </li>
      <li className=" p-3" onClick={() => setOpenMenu(!openMenu)}>
        <Link className=" text-xl" to="/Blog">
          Blog
        </Link>
      </li>
      {user?.uid ? (
        <>
          <li className=" p-3 bg-red-700 rounded" onClick={LogOUT}>
            <Link className=" text-white">Logout</Link>
          </li>
          <li className=" p-3" onClick={() => setOpenMenu(!openMenu)}>
            {/* <Link to="/Profile" className=" text-xl"> */}
            <div className="avatar online " onClick={() => setOpenDashboard(!openDashBoard)}>
              <div className="w-8 p-1  rounded-full border-2 border-white ">
                <img src={user?.uid ? user?.photoURL : ''} alt="kutub" />
                {openDashBoard ? <ul className="dashBoard">{dashboardMenu}</ul> : null}
                {/* {console.log(openDashBoard)} */}
              </div>
            </div>
            {/* </Link> */}
          </li>
        </>
      ) : (
        <>
          <li className="bg-white rounded p-3">
            <Link  to="/Login" onClick={() => setOpenMenu(!openMenu)} className=" text-xl logins font-semibold">
              login
            </Link>
          </li>
          <li className=" p-3 bg-red-700 rounded" onClick={() => setOpenMenu(!openMenu)}>
            <Link className=" text-xl" to="/Register">
              Register
            </Link>
          </li>
        </>
      )}
      
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
          <RiBarChartHorizontalLine className="logo2 w-56 h-16 text-black"></RiBarChartHorizontalLine>
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
        {openMenu ? <ul className="menuItem">{menuItem}</ul> : <ul className="menuItems">{menuItem}</ul>}
        <div className="relative BarsBar" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? (
            <button className="bars">
              <FaBars className="w-6 h-6 text-white"/>
            </button>
          ) : (
            <button className="closeBar">
              <FaWindowClose className="w-6 h-6 text-white"/>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
