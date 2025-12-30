import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
        <div className=" ">
          <div className=" ">
            <Link to={"/"} className="">
                <span>Brush & Glow</span>
              </Link>
          </div>

          <div className=" flex justify-evenly gap-1 font-medium">
            <div>
              
            </div>
            <div>
              <Link to={"/story"} className="">
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

            <div className="flex justify-evenly gap-5 font-bold">
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
    </>
  );
};

export default Header;
