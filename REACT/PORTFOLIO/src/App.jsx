import React, { useEffect } from "react";
import { initTheme } from "./utils/theme";
import AnimatedBackground from "./components/AnimatedBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Hero";

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
      </main>
    </div>


  );
};

export default App;
