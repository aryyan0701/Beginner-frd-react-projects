import React from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flex w-full h-14 bg-stone-400 dark:bg-slate-900 text-black dark:text-white justify-between p-3 px-5 items-center">
        <div className="flex space-x-2 items-center">
          <label htmlFor="my-drawer">
            <FaBars className=" mr-2" />
          </label>
          <h2 className="text-xl text-black dark:text-white font-semibold">
           <Link to='/'>Counter</Link>
          </h2>
        </div>
        <h2 className="text-xl text-black dark:text-white font-semibold">
        <Link to='/model'>Model</Link>
          </h2>
 
      </nav>

     
    </>
  );
}

export default Navbar;