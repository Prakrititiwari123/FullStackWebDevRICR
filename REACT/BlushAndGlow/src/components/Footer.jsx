import React from "react";
import { MdArrowOutward } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div className=" bg-black flex justify-evenly p-25 leading-10">
        <div className="">
          <div className=" text-white text-3xl mb-5">BLUSH & GLOW</div>
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
              <div className=" leading-8 hover:text-white">info@example.com </div>
              <div className=" leading-8 hover:text-white">+(239) 555-0108</div>
            </div>
          </div>
        </div>

        <div className="text-white text-lg leading-10">
          <div className=" flex gap-5 justify-baseline"><span>About us</span> <span className=" "><MdArrowOutward /></span></div> <hr />
          <div className=" flex gap-5 justify-baseline"><span>Categories</span> <span className=" "><MdArrowOutward /></span></div> <hr />
          <div className=" flex gap-5 justify-baseline"><span>Shop</span> <span className=" "><MdArrowOutward /></span></div> <hr />
          <div className=" flex gap-5 justify-baseline"><span>About us</span> <span className=" "><MdArrowOutward /></span></div> <hr />
          <div className=" flex gap-5 justify-baseline"><span>Blog</span> <span className=" "><MdArrowOutward /></span></div> <hr />
          <div className=" flex gap-5 justify-baseline"><span>Reviews</span> <span className=" "><MdArrowOutward /></span></div> <hr />
          <div className=" flex gap-5 justify-baseline"><span>Contact us</span> <span className=" "><MdArrowOutward /></span></div> <hr />
          <div className=" flex gap-5 justify-baseline"><span>Store Location</span> <span className=" "><MdArrowOutward /></span></div> <hr />
        
        </div>

        <div className="text-white text-lg leading-10">
          <div>FAQ       </div> <hr />
          <div>Privacy Policy</div> <hr />
          <div>Terms & Conditions</div> <hr />
          <div>Return Policy</div> <hr />
          <div>Style Guide</div> <hr />
          <div>Licensing</div> <hr />
          <div>Changelog</div> <hr />
        </div>
      </div>
    </>
  );
};
export default Footer;
