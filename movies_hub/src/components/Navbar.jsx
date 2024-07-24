import React from "react";

function Navbar() {
  return (
    <>
      <nav className="flex w-full h-20 bg-slate-900 text-black dark:text-white justify-between p-3 px-5 items-center">
        <div className="flex space-x-2 items-center">
          <h2 className="text-xl text-white font-semibold">
           Moivies-Hub
          </h2>
        </div>
      </nav>

     
    </>
  );
}

export default Navbar;