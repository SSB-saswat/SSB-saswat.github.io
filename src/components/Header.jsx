import React from "react";
import { Profile } from "../assets";

const Header = ({ darkMode }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 2xl:gap-20 py-20">
      <div className="flex flex-col mb-20 lg:mb-0">
        <span className="text-lg font-bold text-orange-700">
          FULL-STACK DEVELOPER
        </span>
        <div className="flex gap-4 items-center my-4">
          <h1 className="text-gray-800 dark:text-neutral-100 text-5xl 2xl:text-7xl font-bold text-center">
            I'm a
          </h1>
          <div className="flex items-center justify-center text-white shadow-lg bg-blue-800 dark:bg-[#224cff10] dark:text-[#224cff]">
            <p className="text-3xl 2xl:text-5xl font-bold px-5 py-2 pb-2 text-center">
              Developer
            </p>
          </div>
        </div>

        <h1 className="text-5xl 2xl:text-7xl font-extrabold text-black dark:text-neutral-100 tracking-wider">
          Saswat Subham Behera
        </h1>

        <p className="text-md text-black dark:text-gray-100 mt-5 2xl:mt-10">
          Full-Stack Web Developer with the ability to learn and collaborate in
          rapidly changing environments and compositions.
        </p>

        <div className="mt-10 flex gap-10">
          <button className="bg-orange-700 text-lg text-white font-semibold rounded-md py-3 px-5">
            Hire Me
          </button>

          <a href="#projects">
            <button className="text-lg text-white font-semibold rounded-md py-3 px-5 bg-black dark:[#224cff10]">
              Projects
            </button>
          </a>
        </div>
      </div>

      <div className="w-[320px] h-[290px] md:w-[600px] md:h-[600px] 2xl:w-[700px] 2xl:h-[700px] rounded-full border-gray-600 dark:border-gray-200 relative md:mt-20 lg:mt-0 flex item-center justify-center">
        <img
          // src={darkMode ? Profile : darkProfile}
          src={Profile}
          className="w-auto h-full absolute -top-5 md:-top-10 rounded-full"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Header;
