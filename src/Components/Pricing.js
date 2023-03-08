import React from "react";

import { BsCheckLg } from "react-icons/bs";

const Pricing = () => {
  return (
    <section className="relative py-20 2xl:py-20 overflow-hidden">
      <div id="pricing">
        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden absolute  w-full h-6 bottom-0 lg:block"
          ></div>

          <div className="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-30 sm:px-2 lg:max-w-7xl lg:px-8">
            <strong className="text-4xl  text-header-color">
              <span className="block lg:inline">Pricing Options</span>
            </strong>
            <p className="mt-4 text-lg text-gray-400">
              Start increasing your sales by choosing the convinient pricing for
              you.
            </p>
          </div>

          <h2 className="sr-only">Plans</h2>

          <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
            <div
              aria-hidden="true"
              className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-tale rounded-tl-lg rounded-tr-lg lg:block"
            ></div>

            <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 border border-gray-200 rounded-md">
              <div className="py-0 px-0 pb-0 rounded-lg">
                <div className="bg-white hover:shadow-2xl border shadow-black rounded-lg lg:px-8 lg:py-12">
                  <div>
                    <h3 className="text-header-color text-sm font-semibold uppercase tracking-wide">
                      Personal
                    </h3>
                    <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                      <div className="mt-3 flex items-center font-body">
                        <p className="text-header-color text-4xl font-extrabold tracking-tight">
                          $6.99
                        </p>
                        <div className="ml-4">
                          <p className="text-gray-400 text-sm">USD / mo</p>
                          <p className="text-gray-400 text-sm">
                            Billed yearly ($60)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-lg mt-7 font-bold">
                    Benefits of Personal
                  </h4>
                  <ul className="border-pinkLight divide-pinkLight divide-opacity-75 ">
                    <li className="py-2 flex items-center">
                      <BsCheckLg className="text-green-800" />
                      <span className="text-black ml-3 text-sm">
                        Up to 3 months massage history
                      </span>
                    </li>

                    <li className="py-2 flex items-center">
                      <BsCheckLg className="text-green-800" />
                      <span className="text-black ml-3 text-sm">
                        500 Mb RAM Memory
                      </span>
                    </li>

                    <li className="py-2 flex items-center">
                      <BsCheckLg className="text-green-800" />
                      <span className="text-black ml-3 text-sm">
                        Up to 6 months of sells done through Connect
                      </span>
                    </li>
                    <li className="py-2 flex items-center">
                      <BsCheckLg className="text-green-800" />
                      <span className="text-black ml-3 text-sm">
                        Secure work with other sellers or buyers
                      </span>
                    </li>
                    <li className="py-2 flex items-center">
                      <BsCheckLg className="text-green-800" />
                      <span className="text-black ml-3 text-sm">
                        Connect with other sellers
                      </span>
                    </li>
                    <li className="py-2 flex items-center">
                      <BsCheckLg className="text-green-800" />
                      <span className="text-black ml-3 text-sm">
                        Sells dashboard for your products
                      </span>
                    </li>
                  </ul>
                  <a
                    href="/"
                    className=" text-black bg-secondary-color mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
                  >
                    Buy Personal
                  </a>
                </div>
              </div>

              <div className="py-0 px-2 pb-0 rounded-lg">
                <div className="bg-white hover:shadow-2xl border shadow-black rounded-lg lg:px-8 lg:py-12">
                  <div>
                    <h3 className="text-header-color text-sm font-semibold uppercase tracking-wide">
                      Pro
                    </h3>
                    <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                      <div className="mt-3 flex items-center">
                        <p className="text-header-color text-4xl font-extrabold tracking-tight">
                          $15.99
                        </p>
                        <div className="ml-4">
                          <p className="text-gray-400 text-sm">USD / mo</p>
                          <p className="text-gray-400 text-sm">
                            Billed yearly ($100)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-lg mt-7 font-bold">Benefits of Pro</h4>
                  <ul className="border-pinkLight divide-pinkLight divide-opacity-75 ">
                    <li className="py-2 flex items-center">
                      <BsCheckLg className="text-green-800" />
                      <span className="text-black ml-3 text-sm">
                        99.99% guaranteed uptime
                      </span>
                    </li>

                    <li className="py-2 flex items-center">
                      <BsCheckLg className="text-green-800" />
                      <span className="text-black ml-3 text-sm">
                        Modify your user account
                      </span>
                    </li>

                    <li className="py-2 flex items-center">
                      <BsCheckLg className="text-green-800" />
                      <span className="text-black ml-3 text-sm">
                        Up to 2.5 years of sells done through Connect
                      </span>
                    </li>
                    <li className="py-2 flex items-center">
                      <BsCheckLg className="text-green-800" />
                      <span className="text-black ml-3 text-sm">
                        Message Data exports for your account
                      </span>
                    </li>
                    <li className="py-2 flex items-center">
                      <BsCheckLg className="text-green-800" />
                      <span className="text-black ml-3 text-sm">
                        Support for data loss
                      </span>
                    </li>
                    <li className="py-2 flex items-center">
                      <BsCheckLg className="text-green-800" />
                      <span className="text-black ml-3 text-sm">
                        SAML-based authentication
                      </span>
                    </li>
                  </ul>
                  <a
                    href="/"
                    className="text-black bg-secondary-color mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
                  >
                    Buy Pro
                  </a>
                </div>
              </div>

              <div className="py-0 px-0 pb-0 rounded-lg">
                <div className="bg-white hover:shadow-2xl border shadow-black rounded-lg lg:px-8 lg:py-12">
                  <div>
                    <h3 className="text-header-color text-sm font-semibold uppercase tracking-wide">
                      Enterprise
                    </h3>
                    <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                      <div className="mt-3 flex items-center">
                        <p className="text-header-color text-4xl font-extrabold tracking-tight">
                          $14.99
                        </p>
                        <div className="ml-4">
                          <p className="text-gray-400 text-sm">USD / mo</p>
                          <p className="text-gray-400 text-sm">
                            Billed yearly ($160)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-lg mt-7 font-bold">
                    Benefits of Enterprise
                  </h4>
                  <ul className="border-pinkLight divide-pinkLight divide-opacity-75 ">
                    <li className="py-2 flex items-center">
                      <BsCheckLg className="text-green-800" />
                      <span className="text-black ml-3 text-sm">
                        Unlimited massage history
                      </span>
                    </li>

                    <li className="py-2 flex items-center">
                      <BsCheckLg className="text-green-800" />
                      <span className="text-black ml-3 text-sm">
                        Support for data loss
                      </span>
                    </li>

                    <li className="py-2 flex items-center">
                      <BsCheckLg className="text-green-800" />
                      <span className="text-black ml-3 text-sm">
                        File collaboration
                      </span>
                    </li>
                    <li className="py-2 flex items-center">
                      <BsCheckLg className="text-green-800" />
                      <span className="text-black ml-3 text-sm">
                        Connect with other sellers
                      </span>
                    </li>
                    <li className="py-2 flex items-center">
                      <BsCheckLg className="text-green-800" />
                      <span className="text-black ml-3 text-sm">
                        Integration with apps
                      </span>
                    </li>
                    <li className="py-2 flex items-center">
                      <BsCheckLg className="text-green-800" />
                      <span className="text-black ml-3 text-sm">
                        Two factor authentication
                      </span>
                    </li>
                  </ul>
                  <a
                    href="/"
                    className="text-black bg-secondary-color mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
                  >
                    Buy Enterprise
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
