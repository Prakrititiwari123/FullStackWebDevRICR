import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between p-3 bg-primary text-light border bg-amber-800 text-4xl text-cyan-100 flex justify-center">
        <div className="d-flex gap-3">

          <Link to={"/"} className="text-text-decoration-none text-light">
            Registration Form
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;
