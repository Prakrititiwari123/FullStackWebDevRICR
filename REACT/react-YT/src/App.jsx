import React from "react";

import Cards from "./components/Cards";
import User from "./components/User"
import LocalStorage from "./components/LocalStorage";

const App = () => {
  const arr=[10,20,30]
  return (
    <>
      {/* <div className="parents">
        {arr.map(function(e){
          return <Cards/>
        })}
      </div> */}

      <div>
        <LocalStorage/>
      </div>
    </>
  );
};

export default App;
