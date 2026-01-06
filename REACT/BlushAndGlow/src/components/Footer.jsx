import React from "react";
const Footer = () => {
  return (
    <>
      <div className=" bg-black flex justify-evenly p-25 leading-10">
        <div className="">
          <div className=" text-white text-3xl mb-5">BLUSH & GLOW</div>
          <div className="text-gray-500 text-sm">
            <div className=" leading-8">
              Designed by Nixar. Powered by Webflow
            </div>
            <div className=" leading-8">© 2025 Vash.</div>
          </div>
        </div>

        <div>
          <div className="text-white text-lg mb-7">CONTACT</div>
          <div className="text-gray-500 text-sm">
            <div className=" ">
              <div className=" leading-8">
                4517 Washington Ave. <br /> Manchester, Kentucky 39495
              </div>
              <div className=" leading-8">info@example.com </div>
              <div className=" leading-8">+(239) 555-0108</div>
            </div>
          </div>
        </div>

        <div className="text-white text-lg leading-10">
          <div>About us</div> <hr />
          <div>Categories</div> <hr />
          <div>Shop</div> <hr />
          <div>Blogs</div> <hr />
          <div>Reviews</div> <hr />
          <div>Contact us</div> <hr />
          <div>Store Locator</div> <hr />
        </div>

        <div className="text-white text-lg leading-10">
          <div>FAQ</div> <hr />
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
