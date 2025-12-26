import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between p-3 bg-primary text-light">
        <h3>My website</h3>
        <div className="d-flex gap-3">

          <Link to={"/"} className="text-text-decoration-none text-light">
            Home
          </Link>

          <Link to={"/about"} className="text-text-decoration-none text-light">
            About
          </Link>

          <Link
            to={"/product"}
            className="text-text-decoration-none text-light"
          >
            Product
          </Link>

          <Link
            to={"/contact"}
            className="text-text-decoration-none text-light"
          >
            Contact
          </Link>
          
        </div>
      </div>
    </>
  );
};
export default Header;
