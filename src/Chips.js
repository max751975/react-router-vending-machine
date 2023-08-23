import React from "react";
import { Link } from "react-router-dom";
import "./Chips.css";
const Chips = () => {
  return (
    <div className="Chips">
      <h2>Chips</h2>
      <div className="home-link">
        <Link exact to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Chips;
