import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="bg-primary text-light">This is my first React App</div>
      <Header />
    </>
  );
}

export default App;
