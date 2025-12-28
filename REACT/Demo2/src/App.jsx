import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product from "./pages/Product";


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
          <Route path="/product" element={<Product/>}/>
      </Routes>

      <Footer/>
      
      </BrowserRouter>
    </>
  );
};

export default App;
