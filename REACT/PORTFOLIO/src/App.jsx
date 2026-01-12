import React, { useEffect } from "react";
import { initTheme } from "./utils/theme";
import AnimatedBackground from "./components/AnimatedBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {

  useEffect(()=>{
    initTheme();
  },[])

  return (
    <div className="min-h-screen grid-pattern dark:grid-pattern-light">
      <AnimatedBackground/>
      <Header/>
      <main>
        <Hero/>
        <Work/>
        <Skills/>
        <About/>
        <Contact/>
        <Footer/>
      </main>
    </div>


  );
};

export default App;
