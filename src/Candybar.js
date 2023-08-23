import React from "react";
import { Link } from "react-router-dom";
import "./Candybar.css";
const Candybar = () => {
  return (
    <div className="Candybar">
      <h2>Candybar</h2>
      <div className="home-link">
        <Link exact to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
};
export default Candybar;
