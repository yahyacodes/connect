import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../Images/connect-logo-01.png";

const Navabar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="bg-white shadow-md md:py-0 py-4 px-2 sm:px-4">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="Home" className="flex items-center">
          <img src={logo} alt="" className="w-28" />
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-black bg-secondary-color font-medium rounded text-xs px-5 py-2.5 text-center mr-3 md:mr-0 hidden md:flex"
          >
            Get started
          </button>
          <div
            className="text-3xl absolute right-14 top-4 cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <AiOutlineMenu /> : <AiOutlineClose />}
          </div>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1
          ${isOpen ? "hidden" : "left-[500px]"}`}
        >
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="Home"
                className="block py-2 pl-3 pr-4 text-black"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a href="Home" className="block py-2 pl-3 pr-4 text-black">
                About
              </a>
            </li>
            <li>
              <a href="Home" className="block py-2 pl-3 pr-4 text-black">
                Features
              </a>
            </li>
            <li>
              <a
                href="Home"
                className="block py-2 pl-3 pr-4 text-header-color uppercase"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navabar;
