import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleExternalLinks = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className=" bg-black flex justify-evenly p-25 leading-10">
        <div className="">
          <div className=" text-white text-3xl mb-5 cursor-pointer hover:text-pink-500 transition" onClick={() => navigate("/")}>BLUSH & GLOW</div>
          <div className="text-gray-500 text-sm font-medium">
            <div className=" leading-8">
              Designed by Nixar. Powered by Webflow
            </div>
            <div className=" leading-8">© 2025 Vash.</div>
          </div>
        </div>

        <div>
          <div className="text-white text-lg mb-7">CONTACT</div>
          <div className="text-gray-500 text-sm">
            <div className=" font-medium">
              <div className=" leading-8">
                4517 Washington Ave. <br /> Manchester, Kentucky 39495
              </div>
              <div className=" leading-8 hover:text-white cursor-pointer transition" onClick={() => handleExternalLinks("mailto:info@example.com")}>info@example.com </div>
              <div className=" leading-8 hover:text-white cursor-pointer transition" onClick={() => handleExternalLinks("tel:+12395550108")}>+(239) 555-0108</div>
            </div>
          </div>
        </div>

        <div className="text-white text-lg leading-10">
          <button onClick={() => handleNavigation("/story")} className=" flex gap-5 justify-baseline hover:text-pink-500 transition w-full"><span>Our Story</span> <span className=" "><MdArrowOutward /></span></button> <hr />
          <button onClick={() => handleNavigation("/shop")} className=" flex gap-5 justify-baseline hover:text-pink-500 transition w-full"><span>Shop</span> <span className=" "><MdArrowOutward /></span></button> <hr />
          <button onClick={() => handleNavigation("/shop")} className=" flex gap-5 justify-baseline hover:text-pink-500 transition w-full"><span>Categories</span> <span className=" "><MdArrowOutward /></span></button> <hr />
          <button onClick={() => handleNavigation("/blogs")} className=" flex gap-5 justify-baseline hover:text-pink-500 transition w-full"><span>Blogs</span> <span className=" "><MdArrowOutward /></span></button> <hr />
          <button onClick={() => handleNavigation("/reviews")} className=" flex gap-5 justify-baseline hover:text-pink-500 transition w-full"><span>Reviews</span> <span className=" "><MdArrowOutward /></span></button> <hr />
          <button onClick={() => handleNavigation("/contacts")} className=" flex gap-5 justify-baseline hover:text-pink-500 transition w-full"><span>Contact us</span> <span className=" "><MdArrowOutward /></span></button> <hr />
          <button onClick={() => handleNavigation("/story")} className=" flex gap-5 justify-baseline hover:text-pink-500 transition w-full"><span>Store Location</span> <span className=" "><MdArrowOutward /></span></button> <hr />
        
        </div>

        <div className="text-white text-lg leading-10">
          <button onClick={() => handleExternalLinks("#")} className="hover:text-pink-500 transition">FAQ</button> <hr />
          <button onClick={() => handleExternalLinks("#")} className="hover:text-pink-500 transition">Privacy Policy</button> <hr />
          <button onClick={() => handleExternalLinks("#")} className="hover:text-pink-500 transition">Terms & Conditions</button> <hr />
          <button onClick={() => handleExternalLinks("#")} className="hover:text-pink-500 transition">Return Policy</button> <hr />
          <button onClick={() => handleExternalLinks("#")} className="hover:text-pink-500 transition">Style Guide</button> <hr />
          <button onClick={() => handleExternalLinks("#")} className="hover:text-pink-500 transition">Licensing</button> <hr />
          <button onClick={() => handleExternalLinks("#")} className="hover:text-pink-500 transition">Changelog</button> <hr />
        </div>
      </div>
    </>
  );
};
export default Footer;
