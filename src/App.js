import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="checkout"
          element={<Checkout/>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
