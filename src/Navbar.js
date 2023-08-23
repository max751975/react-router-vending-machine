import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink exact to="/almonds">
        Almonds
      </NavLink>
      <NavLink exact to="/candybar">
        Candybar
      </NavLink>
      <NavLink exact to="/chips">
        Chips
      </NavLink>
    </nav>
  );
};

export default Navbar;
