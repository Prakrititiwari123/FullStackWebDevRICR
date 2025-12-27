import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <>
      {/* <div className="bg-red-500 m-[5.2px]">App</div>
    <button className="border border-blue-700 rounded bg-blue-300 text-red-500 px-3 py-1 hover:bg-blue-700 hover:text-white">Abcd</button>

    <div className='grid grid-cols-[200px_300px] justify-items-center gap-5'>
      <div className="border p-3 w-10 h-10">1</div>
      <div className="border p-3  w-10 h-10">2</div>
      <div className="border p-3  w-10 h-10">3</div>
      <div className="border p-3  w-10 h-10">4</div>
      <div className="border p-3  w-10 h-10">5</div>
      <div className="border p-3  w-10 h-10">6</div>
      <div className="border p-3  w-10 h-10">7</div>
      <div className="border p-3  w-10 h-10">8</div>
      <div className="border p-3  w-10 h-10">9</div>
      <div className="border p-3  w-10 h-10">10</div>
    </div> */}

      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
