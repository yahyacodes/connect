import React, { useState } from "react";

import Jason from "./Jason";
import Amelia from "./Amelia";
import Jonathan from "./Jonathan";

import jasonPic from "../Images/adobe-stock.jpg";
import lady from "../Images/lady.jpg";
import jonathanPic from "../Images/Jonathan.jpg";

const Testimonials = () => {
  const [showText, setShowText] = useState("jasonText");

  return (
    <section className="mt-10 mb-20">
      <h1 className="text-5xl text-header-color font-bold text-center mb-20">
        What our clients say about us
      </h1>
      <div className="container mx-auto items-center justify-between flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4  mb-20 lg:mb-0">
          <div
            className="bg-white p-4 border hover:shadow-xl rounded"
            onClick={() => setShowText("jasonText")}
          >
            <div className="flex items-center">
              <img
                src={jasonPic}
                alt=""
                className="h-16 w-16 rounded-full object-cover border-header-color border-4"
              />
              <div className="pl-4">
                <p className="text-lg text-black">Jason Morta</p>
                <p className="text-gray-400">Shopify Seller</p>
              </div>
            </div>
          </div>

          <div
            className="bg-white p-4 border hover:shadow-xl rounded mt-2"
            onClick={() => setShowText("ameliaText")}
          >
            <div className="flex items-center">
              <img
                src={lady}
                alt=""
                className="h-16 w-16 rounded-full object-cover border-secondary-color border-4"
              />
              <div className="pl-4">
                <p className="text-lg text-black">Amelia Benjamin</p>
                <p className="text-gray-400">Ebay Seller</p>
              </div>
            </div>
          </div>

          <div
            className="bg-white p-4 border hover:shadow-xl rounded mt-2"
            onClick={() => setShowText("jonathanText")}
          >
            <div className="flex items-center">
              <img
                src={jonathanPic}
                alt=""
                className="h-16 w-16 rounded-full object-cover border-third-color border-4"
              />
              <div className="pl-4">
                <p className="text-lg text-black">Jonathan Yu</p>
                <p className="text-gray-400">Amazon FBA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2  mb-20 lg:mb-0 lg:mx-36 md:-mx-3">
          {showText === "jasonText" && <Jason />}
          {showText === "ameliaText" && <Amelia />}
          {showText === "jonathanText" && <Jonathan />}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
