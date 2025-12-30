import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Contacts from "./pages/Contacts";
import Reviews from "./pages/Reviews";
import Blogs from "./pages/Blogs";
import Shop from "./pages/Shop";
import Story from "./pages/Story";
import Home from "./pages/Home";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/story" element={<Story />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
