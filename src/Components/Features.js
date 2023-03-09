import React from "react";

import supportIcon from "../Images/6457560_24 hours_24_7_customer_delivery_service_icon-01.png";
import accessIcon from "../Images/3763170_access_connection_internet_sever_universal_icon-01.png";
import findIcon from "../Images/352364_find_replace_icon-01.png";

const Features = () => {
  return (
    <section className="mb-20">
      <div className="py-20 px-42 z-50">
        <div className="container mx-auto items-center justify-between flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3  mb-20 lg:mb-0">
            <div className="flex items-center">
              <img src={supportIcon} alt="" className="w-10 h-10" />
              <div className="pl-2 mt-1">
                <h1 className="text-3xl font-bold leading-none">Support</h1>
              </div>
            </div>
            <p className="text-base text-gray-400 mt-2 max-w-sm">
              Once you start using Connect you will get 24/7 support which will
              not slow down your conversations, deals and connection with other
              sellers.
            </p>
            <p className="text-base text-gray-400 mt-2 max-w-sm">
              We always work on how to improve our product thus allowing you to
              have 24/7 support.
            </p>
          </div>

          <div className="w-full md:w-1/3 lg:w-1/3  mb-20 lg:mb-0">
            <div className="flex items-center">
              <img src={accessIcon} alt="" className="w-10 h-10" />
              <div className="pl-2 mt-1">
                <h1 className="text-3xl font-bold leading-none">
                  Access all your tools
                </h1>
              </div>
            </div>
            <p className="text-base text-gray-400 mt-2 max-w-sm">
              Using our product will allow you get access to all of your tools,
              which will connect you with all other sellers in your niche or
              expand your connections with your buyers
            </p>
            <p className="text-base text-gray-400 mt-2 max-w-sm">
              You will always have to work on your target let us do the rest to
              make your sells easy
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/3  mb-20 lg:mb-0">
            <div className="flex items-center">
              <img src={findIcon} alt="" className="w-10 h-10" />
              <div className="pl-2 mt-1">
                <h1 className="text-3xl font-bold leading-none">
                  Find what you want
                </h1>
              </div>
            </div>
            <p className="text-base text-gray-400 mt-2 max-w-sm">
              With Connect you are able to find whatever you looking for easily,
              whether you are seller or buyer
            </p>
            <p className="text-base text-gray-400 mt-2 max-w-sm">
              We always eager to make your life easier whether you are a seller
              or a buyer to find whatever you are looking for product to buy or
              for a product to sell we are always here for you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
