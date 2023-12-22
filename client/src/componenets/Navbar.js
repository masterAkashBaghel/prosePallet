import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/defaults.png";
import { useNavigate } from "react-router-dom";
import Profile from "../componenets/Profile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

   

  return (
    <div>
      <nav className="bg-white       flex justify-between  lg:justify-around  md:justify-between items-center top-0 left-0 right-0 fixed z-40">
        <Link to="/" className="text-white font-bold text-xl lg:ml-10">
          <img className="h-16 lg:h-[100px]  " src={logo} alt="logo" />
        </Link>

        <div className="lg:flex  lg:gap-[70px]  lg:w-auto hidden font-semibold     ">
            <div className="text-xl text-[#014073] lg:flex-grow p-6 lg:pl-20 gap-5">
            <Link
              to="/"
              className="my-2 lg:my-0 mx-4 text-[#014073] hover:text-gray-500 mr-4"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="my-2 lg:my-0 mx-4 text-[#FF8000] hover:text-gray-500 mr-4"
            >
              About
            </Link>
            
            <Link
              to="/posts"
              className="my-2 lg:my-0 mx-4 text-[#5a388d] hover:text-gray-500"
            >
              All Blogs
            </Link>
          </div>

         
        </div>
      
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-non "
          >
            <svg
              className="h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* <button className={ `lg:block lg:font-semibold lg:text-xl text-sm hover:text-blue-400 bg-white border p-2 rounded-md`}
         onClick={ toLogin}
        >
              Log Out
          </button> */}
          <Profile></Profile>
      </nav>
      <div
        className={`${isOpen ? "block" : "hidden"} lg:hidden  bg-white z-10`}
      >
        <div className="flex flex-col justify-center  ml-2 font-semibold text-sm">
          <Link to="/" className="block my-1 text-[#014073] hover:text-gray-500">
            Home
          </Link>
          <Link
            to="/about"
            className="block my-1 text-black hover:text-gray-500"
          >
            About
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
