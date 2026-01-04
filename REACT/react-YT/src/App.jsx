import React from "react";

import Cards from "./components/Cards";
import User from "./components/User"
import LocalStorage from "./components/LocalStorage";
import UseEffect from "./components/UseEffect";

const App = () => {
  const arr=[10,20,30]
  return (
    <>
      {/* <div className="parents">
        {arr.map(function(e){
          return <Cards/>
        })}
      </div> */}

      {/* <div>
        <LocalStorage/>
      </div> */}

      <div>
        <UseEffect />
      </div>
    </>
  );
};

export default App;
