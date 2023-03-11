import React from "react";

import connectPic from "../Images/connect-hero-removebg-preview.png";
import { BsCircleFill } from "react-icons/bs";

const Connection = () => {
  return (
    <section className="mb-20">
      <div className="flex flex-wrap items-center container m-auto">
        <div className="w-full px-3 order-2 md:order-1 lg:w-1/2">
          <div className="flex items-center mt-4 justify-center">
            <img src={connectPic} alt="" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 md:order-2 order-1 px-3">
          <div className="py-0 mt-10 md:py-12 md:p-20">
            <div className="relative mx-auto md:text-center mb-0 lg:mx-0 lg:text-left">
              <h1 className="text-6xl text-header-color font-bold leading-none">
                Connect with other sellers
              </h1>
              <p className="text-base text-gray-400 mt-2 max-w-sm">
                Marketing alone won't help, connect with other, put yourself out
                there, gain buyers, meet with like minded and sellers like you
              </p>

              <div className="flex items-center">
                <BsCircleFill className="w-2 h-2 mt-2 text-secondary-color" />
                <div className="pl-2 mt-1">
                  <p className="text-gray-400 text-base">
                    Learn from experienced sellers
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <BsCircleFill className="w-2 h-2 mt-2 text-secondary-color" />
                <div className="pl-2 mt-1">
                  <p className="text-gray-400 text-base">
                    Creates job opportunities
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <BsCircleFill className="w-2 h-2 mt-2 text-secondary-color" />
                <div className="pl-2 mt-1">
                  <p className="text-gray-400 text-base">
                    Builds your reputation
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <BsCircleFill className="w-2 h-2 mt-2 text-secondary-color" />
                <div className="pl-2 mt-1">
                  <p className="text-gray-400 text-base">
                    Builds trust and support
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="text-black bg-secondary-color font-medium rounded text-xs px-4 py-2 mt-3 text-center mr-3 md:mr-0"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connection;
