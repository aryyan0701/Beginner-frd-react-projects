import React from "react";
import Navbar from "../components/Navbar";

function Search() {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex justify-center items-center text-center bg-gray-200">
        <div className=" absolute top-[9rem] left-[4rem] max-w-xl flex space-x-4">
          <input
            type="text"
            placeholder="Type here"
            className="input input-ghost w-full max-w-xs"
          />
          <button className="btn btn-active btn-neutral">Find</button>
        </div>
      </div>
    </>
  );
}

export default Search;
