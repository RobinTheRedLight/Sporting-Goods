import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineSportsCricket } from "react-icons/md";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-black ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <h1 className="size-13 bg-transparent border-2 border-yellow-500 text-yellow-500">
            <MdOutlineSportsCricket size={43} />
          </h1>
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-1">
                <span className="text-4xl font-extrabold text-yellow-500 drop-shadow-lg underline">
                  Sport
                </span>
                <span className="text-4xl font-extrabold text-white drop-shadow-lg ">
                  Spot
                </span>
              </div>
            </div>
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-hamburger"
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  sm:hidden"
          aria-controls="navbar-hamburger"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full font-[Roboto] ${
            isOpen ? "block" : "hidden"
          } sm:flex sm:items-center sm:w-auto`}
          id="navbar-hamburger"
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 sm:flex-row sm:space-x-8 sm:mt-0 sm:font-medium sm:bg-transparent ">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-yellow-500 rounded sm:bg-transparent sm:hover:bg-transparent "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/all-products"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100  sm:bg-transparent sm:hover:bg-transparent "
              >
                All Products
              </Link>
            </li>
            <li>
              <Link
                to="/manage-products"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100  sm:bg-transparent sm:hover:bg-transparent "
              >
                Manage Products
              </Link>
            </li>
            <li>
              <Link
                to="/Cart"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700  sm:bg-transparent sm:hover:bg-transparent "
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700  sm:bg-transparent sm:hover:bg-transparent "
              >
               About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
