import React from "react";

import { BsChevronDown } from "react-icons/bs";

const Faqs = () => {
  return (
    <section className="py-60 faqs-bg mt-10">
      <div className="container">
        <h1 className="text-5xl text-header-color font-bold mb-10 text-center">
          Frequently Asked Questions
        </h1>
        <hr className="w-10/12 border-gray-300" />
        <div className="mx-auto items-center justify-between border-inherit flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4  mb-20 lg:mb-0">
            <p className="text-lg font-semibold p-3">What is Connect?</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4  mb-20 lg:mb-0">
            <BsChevronDown />
          </div>
        </div>

        <hr className="w-10/12 border-gray-300" />
        <div className="mx-auto items-center justify-between flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4  mb-20 lg:mb-0">
            <p className="text-lg font-semibold p-3">
              Why should I use Connect?
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4  mb-20 lg:mb-0">
            <BsChevronDown />
          </div>
        </div>

        <hr className="w-10/12 border-gray-300" />
        <div className="mx-auto items-center justify-between flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4  mb-20 lg:mb-0">
            <p className="text-lg font-semibold p-3">
              How can I use Connect effectively?
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4  mb-20 lg:mb-0">
            <BsChevronDown />
          </div>
        </div>

        <hr className="w-10/12 border-gray-300" />
        <div className="mx-auto items-center justify-between flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4  mb-20 lg:mb-0">
            <p className="text-lg font-semibold p-3">Is Connect secure?</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4  mb-20 lg:mb-0">
            <BsChevronDown />
          </div>
        </div>

        <hr className="w-10/12 border-gray-300" />
        <div className="mx-auto items-center justify-between flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4  mb-20 lg:mb-0">
            <p className="text-lg font-semibold p-3">
              Can I sell products using Connect?
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4  mb-20 lg:mb-0">
            <BsChevronDown />
          </div>
        </div>

        <hr className="w-10/12 border-gray-300" />
        <div className="mx-auto items-center justify-between flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4  mb-20 lg:mb-0">
            <p className="text-lg font-semibold p-3">
              Can I buy products using Connect?
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4  mb-20 lg:mb-0">
            <BsChevronDown />
          </div>
        </div>
        <hr className="w-10/12 border-gray-300" />
      </div>
    </section>
  );
};

export default Faqs;
