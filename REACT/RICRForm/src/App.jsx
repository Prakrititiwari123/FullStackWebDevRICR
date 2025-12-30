import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationForm from "./page/RegistrationForm";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<RegistrationForm/>}/>
       
      </Routes>

      <Footer/>
      </BrowserRouter>
    </>
    
  )
}

export default App