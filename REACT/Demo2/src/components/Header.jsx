import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex">
        <div>
          <span>Demo2</span>
        </div>

        <div className="flex justify-evenly">

          <div>
            <Link to={"/"}>
              <span>Home</span>
            </Link>
          </div>
          <div>
            <Link to={"/about"}>
              <span>About</span>
            </Link>
          </div>
          <div>
            <Link to={"/contact"}>
              <span>Contact</span>
            </Link>
          </div>
          <div>
            <Link to={"/product"}>
              <span>Product</span>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;
