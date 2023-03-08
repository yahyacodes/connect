import React from "react";

import heroPic from "../Images/hero-woodwing-connect-front-removebg-preview.png";

const Hero = () => {
  return (
    <section className="mb-20">
      <div className="flex flex-wrap items-center container m-auto">
        <div className="w-full lg:w-1/2 md:order-1 order-2 px-3">
          <div className="py-0 mt-10 md:py-12 md:p-20">
            <div className="relative mx-auto text-center mb-0 lg:mx-0 lg:text-left">
              <h1 className="header-text leading-none">
                Associate with like minded people.
              </h1>
              <p className="text-base text-gray-400 mt-2 max-w-sm">
                Connect to link with other online sellers. See what they are
                selling and what they are buying from each other.
              </p>
            </div>
            <button
              type="button"
              className="block sm:inline-block py-2 px-4 text-xs text-center bg-secondary-color font-medium rounded mt-2"
            >
              Get Started
            </button>
            <p className="block sm:inline-block py-2 px-4 mb-4 sm:mb-0 sm:mr-3 text-xs text-black text-center sm:ml-10">
              15K + online sellers are <br /> connected through here.
            </p>
          </div>
        </div>
        <div className="w-full px-3 order-1 md:order-2 lg:w-1/2">
          <div className="flex items-center mt-4 justify-center">
            <img src={heroPic} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
