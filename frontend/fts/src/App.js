import React from "react";
import { ReactDOM } from "react";
// import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import OffcanvasNavbar from "./components/OffcanvasNavbar";
import DetaileCardOnFirstPage from "./components/DetaileCardOnFirstPage";
import Test from "./components/test";

function App() {
  return (
    <div className="App">
      <OffcanvasNavbar />
      <DetaileCardOnFirstPage />
    </div>
  );
}

export default App;
