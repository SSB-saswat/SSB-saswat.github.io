import React from "react";
import { FiSun } from "react-icons/fi";
import { MdOutlineNightlight } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({ darkMode, isOpen, toggleMenu, toggleTheme }) => {
  return (
    <div className="px-0 2xl:px-40">
      <div className="w-full items-center justify-between py-4 px-10">
        <div className="flex items-center justify-between w-full">
          <a
            href="/"
            className="text-2xl font-bold text-blue-500 cursor-pointer"
          >
            Saswat
          </a>
          <ul className="hidden md:flex gap-10 text-lg text-slate-800 dark:text-gray-200">
            <li className="cursor-pointer hover:text-blue-500">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <a href="#projects">Projects</a>
            </li>
          </ul>

          <button onClick={toggleTheme} className="p-2">
            {darkMode ? (
              <FiSun size={24} color={"white"} />
            ) : (
              <MdOutlineNightlight size={24} color={"gray"} />
            )}
          </button>

          <div className="md:hidden">
            <button
              type="button"
              className=""
              aria-controls="online-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <BiMenu
                size={26}
                className={`${
                  isOpen ? "hidden" : "block"
                } text-gray-700 dark:text-gray-300`}
              />

              <AiOutlineClose
                size={26}
                className={`${
                  isOpen ? "block" : "hidden"
                } h-6 w-6 text-gray-700 dark:text-gray-300`}
              />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className="">

        </div>
      </div>
    </div>
  );
};

export default Navbar;
