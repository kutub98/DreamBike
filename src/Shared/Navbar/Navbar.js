import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../Asset/logo/white.png'
import './Navbar.css'
import { FaBars } from "react-icons/fa"
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuItem =(
    <React.Fragment>
        <div className="menuBar">
          <div className="logo">
            <Link to="Home"><img src={logo} alt="" className=" w-52 h-28 " /></Link>
          </div>
            <ul className="menuItems">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Brand">Brands</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/Categories">Categories</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Register">Register</Link></li>
            <li><Link><FaBars/></Link></li>
            </ul>
        </div>
    </React.Fragment>
  );

  return <div>
    {menuItem}
   
  </div>;
};

export default Navbar;
