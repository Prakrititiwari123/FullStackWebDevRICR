import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import bgImage from "../assets/bgImage.png";

const Home = () => {
  return (
    <>
      <div className=" m-6 p-28 ">
        <div>
          <div
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: bgImage }}
          >
            Content
          </div>
          <h1 className=" text-6xl">
            Glow brighter every <br /> day with cosmetics <br /> that best in
            you
          </h1>
          <p className=" text-3xl">
            Elevate your beauty with luxurious cosmetics <br /> crafted to
            celebrate your natural charm.
          </p>

          <div className=" text-xl">
            <button>
              View Collections <GoArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
