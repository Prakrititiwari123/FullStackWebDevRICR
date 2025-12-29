import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <navbar className="flex item-center">
        <div className="flex  justify-between p-3 bg-blue-400 text-white text-lg">
          <div className="flex items-center gap-1">
            <span className="text-5xl">Blush&Glow </span>
          </div>

          <div className="flex  gap-2 ">
            <div>
              <Link to={"/story"} className="flex items-center gap-1">
                {/* <FaHome className="text-blue-700 " /> */}
                <span>OUR STORY</span>
              </Link>
            </div>

            <div>
              <Link to={"/about"} className="flex items-center gap-1">
                <span>SHOP</span>
              </Link>
            </div>

            <div>
              <Link to={"/about"} className="flex items-center gap-1">
                <span>BLOGS</span>
              </Link>
            </div>

            <div>
              <Link to={"/about"} className="flex items-center gap-1">
                <span>REVIEWS</span>
              </Link>
            </div>

            <div>
              <Link to={"/about"} className="flex items-center gap-1">
                <span>CONTACTS</span>
              </Link>
            </div>

            <div>
              <div>
                <Link to={"/about"} className="flex items-center gap-1">
                  <CiSearch className="text-blue-700" />
                </Link>
              </div>
              <div>
                <Link to={"/about"} className="flex items-center gap-1">
                  <IoCartOutline className="text-blue-700" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </navbar>
    </>
  );
};

export default Header;
