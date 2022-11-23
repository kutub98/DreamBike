import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItem =(
    <React.Fragment>
        <ul>
            <li><Link to="Home">Home</Link></li>
            <li><Link to="/Brand">Brands</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/Categories">Categories</Link></li>
            <li><Link to="/About">About</Link></li>
        </ul>
    </React.Fragment>
  );

  return <div>
    {menuItem}
  </div>;
};

export default Navbar;
