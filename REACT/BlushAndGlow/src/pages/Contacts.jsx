import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";

const Contacts = () => {
  return (
    <>
      <div className=" flex  bg-pink-100 ">
        <div className="p-10">
          <div className="flex gap-3  p-5 font-semibold text-black items-center hover:text-pink-500">
            <IoIosArrowDropright className="text-2xl" />
            <span>GET IN TOUCH</span>
          </div>
          <span className="p-3 font-medium text-black text-5xl hover:text-pink-500">
            Contact Us
          </span>

          <div className=" mt-5 font-sans">
            <div className="ms-5 mb-8">
              <label htmlFor="fullName">Full Name*</label> <br />
              <input
                type="text"
                name="fullName"
                id=""
                placeholder="Write your name here"
                required
                className="  border border-pink-200 text-pink-500 mt-1.5 placeholder:text-gray-400 text-center rounded p-1.5 w-70 focus:outline-none"
              />
            </div>

            <div className="ms-5 mb-8">
              <label htmlFor="email">Email*</label> <br />
              <input
                type="email"
                name="email"
                id=""
                placeholder="Write your email here"
                required
                className="  border border-black text-pink-500 mt-1.5 placeholder:text-gray-400 text-center rounded p-1.5 w-70 focus:outline-none"
              />
            </div>

            <div className="ms-5 mb-8">
              <label htmlFor="number">Phone Number*</label> <br />
              <input
                type="number"
                name="number"
                id=""
                placeholder="Write your number here"
                required
                className="  border border-black text-pink-500 mt-1.5 placeholder:text-gray-400 text-center rounded p-1.5 w-70 focus:outline-none"
              />
            </div>

            <div className="ms-5 mb-8">
              <label htmlFor="message">Message*</label> <br />
              <textarea
                type="text"
                name="message"
                id=""
                placeholder="Write your message here"
                required
                className="  border border-black text-pink-500 mt-1.5 placeholder:text-gray-400 text-center rounded p-1.5 w-70 focus:outline-none"
              />
            </div>

            <button className="ms-5 border p-2 rounded-2xl bg-black text-white hover:bg-pink-500">
              Submit Now
            </button>
          </div>
        </div>

        <div className=" p-15 ms-20 flex gap-20 text-lg">
          <div>
            Our team is ready to assist you with any inquiries regarding <br />{" "}
            our products, services, or orders.
          </div>

          <div className=" leading-8">
            <div className=" mb-4">
              Phone <br />
              +(480) 555-0103
            </div>
            <hr />
            <div className=" mt-4">
              Office Address <br />
              6391 Elgin St. Celina, Delaware 10299
            </div>
          </div>
        </div>

        {/* <div className=" flex">
          <div className=" h-10 w-40 border"></div>
          <div className=" h-10 w-40 border"></div>
      </div> */}
      </div>
      <div className="h-65 w-full bg-pink-200 flex p-15 gap-45">
        <div>
          <p className="mb-4">Global Reach</p>
          <hr />
          <div className="flex gap-2 mt-4">
            <span className="text-4xl">20+</span>
            <span>
              Serving customers in over 20+ countries <br /> worldwide.
            </span>
          </div>
          <div className=" mt-4">
            <hr />
          </div>
        </div>

        <div>
          <p className="mb-4">Customer Satisfaction</p>
          <hr />
          <div className="flex gap-2 mt-4">
            <span className="text-4xl">95%</span>
            <span>
              Trusted by thousands for exceptional <br /> results.
            </span>
          </div>
          <div className=" mt-4">
            <hr />
          </div>
        </div>

        <div>
          <p className="mb-4">High-Quality Ingredients</p>
          <hr />
          <div className="flex gap-2 mt-4">
            <span className="text-4xl">80%</span>
            <span>
              Made with premium ingredients for <br /> maximum impact.
            </span>
          </div>
          <div className=" mt-4">
            <hr />
          </div>
        </div>
      </div>

      <div>
        <div className=" p-25 h-220 bg-pink-100">
          <div>
            <div className="flex text-2xl gap-3 font-semibold text-black items-center hover:text-pink-500">
              <span>
                <IoIosArrowDropright className="text-2xl" />
              </span>
              <span>FAQ'S</span>
            </div>
            <div className="p-3 font-medium text-black text-5xl hover:text-pink-500">
              Frequently Asked Questions
            </div>
            <p className="mt-5 ms-4 text-lg">
              Find answers to our most common questions and learn <br /> more
              about our product.
            </p>
            <div className="flex p-8 gap-8">
              <div className="h-45 w-50 border p-2 mt-5 pt-5 ps-4 rounded-2xl bg-white">
                <p className="pb-3">
                  <IoCallOutline className=" text-3xl hover:text-pink-500 border-2 rounded-2xl p-1" />
                </p>
                <p>
                  Need support? Give us <br /> a call anytime.
                </p>
                <p className="pt-4 underline hover:-underline-offset-0">
                  +1 (239) 555-0108
                </p>
              </div>
              <div className=" h-45 w-50 border p-2 mt-5 pt-5 ps-4 rounded-2xl bg-white">
                <p className="pb-3">
                  <MdOutlineMessage className=" text-3xl hover:text-pink-500 border-2 rounded-2xl p-1" />
                </p>
                <p>
                  Send us an email for <br /> quick support.
                </p>
                <p className="pt-4 underline hover:-underline-offset-0">
                  info@example.com
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div>
              <p>What is BLUSH&GLOW return's policy?</p>
              <p> Are BLUSH&GLOW products safe for sensitive skin?</p>
              <p>How do I know which products are suitable for my skin type?</p>
              <p>Are BLUSH&GLOW products available in stores?</p>
              <p>Which payment methods do you accept for customer orders?</p>
              <p>How can I reach your customer support team?</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Contacts;
