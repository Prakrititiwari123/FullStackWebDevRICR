import React from "react";

import Cards from "./components/Cards";
import User from "./components/User"

const App = () => {
  const arr=[10,20,30]
  return (
    <>
      <div className="parents">
        {arr.map(function(e){
          return <Cards/>
        })}
      </div>
    </>
  );
};

export default App;
