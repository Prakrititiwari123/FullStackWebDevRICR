import React, { useEffect } from "react";
import { initTheme } from "./utils/theme";
import AnimatedBackground from "./components/AnimatedBackground";

const App = () => {

  useEffect(()=>{
    initTheme();
  },[])

  return (
    <div className="min-h-screen grid-pattern dark:grid-pattern-light">
      <AnimatedBackground/>
    </div>


  );
};

export default App;
