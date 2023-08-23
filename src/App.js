import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Almonds from "./Almonds";
import Candybar from "./Candybar";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<VendingMachine />} />
          <Route exact path="/chips" element={<Chips />} />
          <Route exact path="/almonds" element={<Almonds />} />
          <Route exact path="/candybar" element={<Candybar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
