import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <h1>Welcome to the Vending Machine</h1>
      <div className="snack-links">
        <h2>What would You like to eat today?</h2>

        <h3>
          <Link to="/chips">Chips</Link>
        </h3>
        <h3>
          <Link to="/almonds">Almonds</Link>
        </h3>
        <h3>
          <Link to="/candybar">Candybar</Link>
        </h3>
      </div>
    </div>
  );
};

export default VendingMachine;
