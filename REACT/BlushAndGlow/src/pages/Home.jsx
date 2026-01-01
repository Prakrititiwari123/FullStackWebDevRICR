import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import bgImage from "../assets/bgImage.png";

const Home = () => {
  return (
    <>
      <div>
        <div
          className="relative min-h-screen w-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >

          <div className="relative z-10 p-28  text-white">
            <h1 className="text-6xl font-bold leading-[4.5rem] mb-4">
              Glow brighter every <br /> day with cosmetics <br />   that best in you
            </h1>

            <p className="text-2xl mt-4 font-medium leading-8 text-gray-200">
              Elevate your beauty with luxurious cosmetics <br />
              crafted to celebrate your natural charm.
            </p>

            <div className="mt-6 flex items-center gap-2 text-black border border-white/70 rounded-full px-2 py-2 w-max hover:bg-pink-500 hover:text-white transition">
              <button>View Collection</button>
              <GoArrowUpRight />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
