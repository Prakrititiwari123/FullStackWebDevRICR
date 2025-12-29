import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <navbar className="bg-red">
        <div className="">
          <div className="">
            <span className="">Blush&Glow </span>
          </div>

          <div className="">
            <div>
              <Link to={"/story"} className="">
                {/* <FaHome className="text-blue-700 " /> */}
                <span>OUR STORY</span>
              </Link>
            </div>

            <div>
              <Link to={"/about"} className="">
                <span>SHOP</span>
              </Link>
            </div>

            <div>
              <Link to={"/about"} className="">
                <span>BLOGS</span>
              </Link>
            </div>

            <div>
              <Link to={"/about"} className="">
                <span>REVIEWS</span>
              </Link>
            </div>

            <div>
              <Link to={"/about"} className="">
                <span>CONTACTS</span>
              </Link>
            </div>

            <div>
              <div>
                <Link to={"/about"} className="">
                  <CiSearch className="" />
                </Link>
              </div>
              <div>
                <Link to={"/about"} className="">
                  <IoCartOutline className="" />
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
