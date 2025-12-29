import React from "react";
import { DiDebian } from "react-icons/di";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { IoMdCreate } from "react-icons/io";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="flex  justify-between p-3 bg-blue-400 text-white text-lg">
        <div className="flex items-center gap-1">
            <DiDebian className="text-blue-700 "/>
          <span className="text-5xl">Glow MakeUp </span>
        </div>

        <div className="flex  gap-2 ">
          <div>
            <Link to={"/"} className="flex items-center gap-1">
              <FaHome  className="text-blue-700 "/>
              <span>Home</span>
            </Link>
          </div>

          <div>
            <Link
              to={"/about"}
              className="flex items-center gap-1"
            >
                <FaInfoCircle  className="text-blue-700"/>
              <span>About</span>
            </Link>
          </div>



          <div>
            <Link
              to={"/login"}
              className="flex items-center gap-1"
            >
                <CiLogin  className="text-blue-700"/>
              <span>Login</span>
            </Link>
          </div>

          <div>
            <Link
              to={"/signup"}
              className="flex items-center gap-1"
            >
                <IoMdCreate   className="text-blue-700"/>
              <span>Signup</span>
            </Link>
          </div>


        </div>
      </div>
    </>
  );
};
export default Header;
