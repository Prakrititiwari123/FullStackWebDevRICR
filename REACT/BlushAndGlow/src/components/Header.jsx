import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <div>
            <Link to={"/"} className="text-2xl font-extrabold tracking-wide text-pink-600 hover:text-pink-700 transition">
              Blush & Glow
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <Link
              to={"/story"}
              className="relative hover:text-pink-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-500 hover:after:w-full after:transition-all"
            >
              OUR STORY
            </Link>

            <Link
              to={"/shop"}
              className="relative hover:text-pink-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-500 hover:after:w-full after:transition-all"
            >
              SHOP
            </Link>

            <Link
              to={"/blogs"}
              className="relative hover:text-pink-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-500 hover:after:w-full after:transition-all"
            >
              BLOGS
            </Link>

            <Link
              to={"/reviews"}
              className="relative hover:text-pink-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-500 hover:after:w-full after:transition-all"
            >
              REVIEWS
            </Link>

            <Link
              to={"/contacts"}
              className="relative hover:text-pink-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-500 hover:after:w-full after:transition-all"
            >
              CONTACTS
            </Link>
          </div>

          <div className="flex items-center gap-6 text-2xl text-gray-700">
            <Link
              to={"/about"}
              className="hover:text-pink-600 transition transform hover:scale-110"
            >
              <CiSearch />
            </Link>

            <Link
              to={"/about"}
              className="relative hover:text-pink-600 transition transform hover:scale-110"
            >
              <IoCartOutline />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
