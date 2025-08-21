import React from "react";
import { NavLink } from "react-router-dom";
// import "./Navbar.css"; // Import the CSS

const Navbar = () => {
   return (
      <nav className="navbar">
         <div className="navbar-logo">MyApp</div>
         <div className="navbar-links">
            <NavLink to="/" className="nav-link" activeclassname="active">Home</NavLink>
            <NavLink to="/users" className="nav-link" activeclassname="active">Users</NavLink>
            <NavLink to="/addUsers" className="nav-link" activeclassname="active">Add Users</NavLink>
         </div>
      </nav>
   );
};

export default Navbar;
