import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import Contact1 from "./pages/Contact1";
import Product from "./pages/Product";
import About from "./pages/About";
import Login from "./pages/Login";


function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/contact" element={<Contact/>}/>
        {/* <Route path="/contact1" element={<Contact1/>}/> */}
       
      </Routes>

      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
