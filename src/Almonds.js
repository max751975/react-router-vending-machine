import React from "react";
import { Link } from "react-router-dom";
import "./Almonds.css";

const Almonds = () => {
  return (
    <div className="Almonds">
      <h2>Almonds</h2>
      <div className="home-link">
        <Link exact to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
};
export default Almonds;
