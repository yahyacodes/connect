import React, { useState } from "react";

import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

const Faqs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  return (
    <section className="py-60 faqs-bg mt-10">
      <div className="container">
        <h1 className="text-5xl text-header-color font-bold mb-10 text-center">
          Frequently Asked Questions
        </h1>
        <hr className="w-10/12 border-gray-300" />
        <div
          className="mx-auto items-center justify-between border-inherit flex flex-wrap cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 lg:mb-0">
            <p className="text-lg font-semibold p-3">What is Connect?</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 lg:mb-0 text-secondary-color hidden md:flex">
            {!isOpen ? <BsChevronDown /> : <BsChevronUp />}
          </div>
        </div>
        {isOpen && (
          <p className="text-gray-500 font-sm max-w-5xl">
            Connect is a platform focused on creating closed environment for
            online sellers and also online buyers thus helping teams to
            communicate easily using our platform.
          </p>
        )}

        <hr className="w-10/12 border-gray-300" />
        <div
          className="mx-auto items-center justify-between flex flex-wrap cursor-pointer"
          onClick={() => setIsOpen1(!isOpen1)}
        >
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 lg:mb-0">
            <p className="text-lg font-semibold p-3">
              Why should I use Connect?
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 lg:mb-0 text-secondary-color hidden md:flex">
            {!isOpen1 ? <BsChevronDown /> : <BsChevronUp />}
          </div>
        </div>

        {isOpen1 && (
          <p className="text-gray-500 font-sm max-w-5xl">
            Connect allows you to communicate and connect with your team also
            with online sellers and buyers easily and effectively.
          </p>
        )}

        <hr className="w-10/12 border-gray-300" />
        <div
          className="mx-auto items-center justify-between flex flex-wrap cursor-pointer"
          onClick={() => setIsOpen2(!isOpen2)}
        >
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 lg:mb-0">
            <p className="text-lg font-semibold p-3">
              How can I use Connect effectively?
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 lg:mb-0 text-secondary-color hidden md:flex">
            {!isOpen2 ? <BsChevronDown /> : <BsChevronUp />}
          </div>
        </div>
        {isOpen2 && (
          <p className="text-gray-500 font-sm max-w-5xl">
            Create your Connect acount from above, coose your best suitable plan
            to get started with and go through with our turorial showing you how
            to get best out of Connect.
          </p>
        )}

        <hr className="w-10/12 border-gray-300" />
        <div
          className="mx-auto items-center justify-between flex flex-wrap cursor-pointer"
          onClick={() => setIsOpen3(!isOpen3)}
        >
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 lg:mb-0">
            <p className="text-lg font-semibold p-3">Is Connect secure?</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 lg:mb-0 text-secondary-color hidden md:flex">
            {!isOpen3 ? <BsChevronDown /> : <BsChevronUp />}
          </div>
        </div>
        {isOpen3 && (
          <p className="text-gray-500 font-sm max-w-5xl">
            Connect is one of the best secured platforms, thus having end to end
            ecrypted messages we also have a very good and talent team working
            on the security of Connect.
          </p>
        )}

        <hr className="w-10/12 border-gray-300" />
        <div
          className="mx-auto items-center justify-between flex flex-wrap cursor-pointer"
          onClick={() => setIsOpen4(!isOpen4)}
        >
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 lg:mb-0">
            <p className="text-lg font-semibold p-3">
              Can I sell products using Connect?
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 lg:mb-0 text-secondary-color hidden md:flex">
            {!isOpen4 ? <BsChevronDown /> : <BsChevronUp />}
          </div>
        </div>
        {isOpen4 && (
          <p className="text-gray-500 font-sm max-w-5xl">
            Selling through our platform is not a service we provide. You can
            otherwise do marketing for your product trough our platform allowing
            you to gain clients from our platform.
          </p>
        )}

        <hr className="w-10/12 border-gray-300" />
        <div
          className="mx-auto items-center justify-between flex flex-wrap cursor-pointer"
          onClick={() => setIsOpen5(!isOpen5)}
        >
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 lg:mb-0">
            <p className="text-lg font-semibold p-3">
              Can I buy products using Connect?
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 lg:mb-0 text-secondary-color hidden md:flex">
            {!isOpen5 ? <BsChevronDown /> : <BsChevronUp />}
          </div>
        </div>
        {isOpen5 && (
          <p className="text-gray-500 font-sm max-w-5xl">
            Buying through our platform is not a service we provide. You can
            otherwise find what you looking for trough our platform and get in
            touch with your seller.
          </p>
        )}
        <hr className="w-10/12 border-gray-300" />
      </div>
    </section>
  );
};

export default Faqs;
