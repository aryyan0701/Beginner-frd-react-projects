import React from "react";
import ThemeBtn from "./ThemeBtn";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  return (
    <>
      <nav className="flex w-full h-14 bg-stone-400 dark:bg-slate-900 text-black dark:text-white justify-between p-3 px-5 items-center">
        <div className="flex space-x-2 items-center">
          <label htmlFor="my-drawer">
            <FaBars className="lg:hidden mr-2" />
          </label>
          <img
            src="https://new-portfolio-phi-six.vercel.app/assets/Avatar-DAnh2B-J.jpg"
            alt=""
            className="h-10 w-12 rounded-full hidden lg:block"
          />
          <h2 className="text-xl text-black dark:text-white font-semibold">
            Aryan kadam
          </h2>
        </div>
        <div className="flex items-center">
          <span className="text-2xl text-black dark:text-white font-semibold mr-6 hidden lg:block">
            Home
          </span>
          <span className="text-2xl text-black dark:text-white font-semibold mr-6 hidden lg:block">
            About
          </span>
          <span className="text-2xl text-black dark:text-white font-semibold mr-6 hidden lg:block">
            Setting
          </span>
          <span className="text-2xl text-black dark:text-white font-semibold hidden lg:block">
            Contact
          </span>
        </div>
        <div className="flex">
          <div className="flex items-center space-x-3 mr-10">
            <FaSquareGithub className="text-2xl text-black dark:text-white hidden sm:block" />
            <FaLinkedin className="text-2xl text-black dark:text-white hidden sm:block" />
            <FaBehanceSquare className="text-2xl text-black dark:text-white hidden sm:block" />
          </div>
          <div>
            <ThemeBtn />
          </div>
        </div>
      </nav>

      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-stone-400 dark:bg-slate-900 text-black dark:text-white min-h-full w-80 p-10 justify-start">
            <div>
              <img
                src="https://new-portfolio-phi-six.vercel.app/assets/Avatar-DAnh2B-J.jpg"
                alt=""
                className="h-14 w-16 rounded-full mb-3"
              />
              <h2 className="text-2xl text-black dark:text-white font-semibold">
                Aryan kadam
              </h2>
            </div>
            <div className="mt-10 mb-[13rem]">
              <ul className="space-y-4">
                <li className="text-2xl text-black dark:text-white font-semibold">
                  <a>Home</a>
                </li>
                <li className="text-2xl text-black dark:text-white font-semibold">
                  <a>About</a>
                </li>
                <li className="text-2xl text-black dark:text-white font-semibold">
                  <a>Setting</a>
                </li>
                <li className="text-2xl text-black dark:text-white font-semibold">
                  <a>Contact</a>
                </li>
                <li className="text-2xl text-black dark:text-white font-semibold">
                  <a>Support</a>
                </li>
              </ul>
            </div>
            <div className="flex">
              <div className="flex items-center space-x-3 mr-10">
                <FaSquareGithub className="text-3xl text-black dark:text-white " />
                <FaLinkedin className="text-3xl text-black dark:text-white " />
                <FaBehanceSquare className="text-3xl text-black dark:text-white " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
