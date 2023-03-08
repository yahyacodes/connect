import React from "react";

const Navabar = () => {
  return (
    <nav className="bg-white shadow-md px-2 sm:px-4">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="Home" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Connect
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-black bg-secondary-color font-medium rounded text-xs px-5 py-2.5 text-center mr-3 md:mr-0"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
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
                Services
              </a>
            </li>
            <li>
              <a href="Home" className="block py-2 pl-3 pr-4 text-black">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navabar;
