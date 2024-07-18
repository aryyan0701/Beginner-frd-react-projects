import React from "react";

function Hero() {
  return (
    <>
      <div className="w-full h-screen bg-purple-200 dark:bg-gray-900">
        <h2 className="flex w-full h-10 justify-center items-center text-2xl font-semibold dark:text-white">
          welcome to page filtering
        </h2>
        <select className="absolute top-14 right-4 w-30 h-10 p-2 rounded">
          <option value="select options" selected>
            select option
          </option>
          <option value="planets">planets</option>
          <option value="vehicles">vehicles</option>
          <option value="people">people</option>
          <option value="starships">starships</option>
          <option value="species">species</option>
        </select>

        <div className="conatiner p-5 flex flex-grid-1 sm:flex-grid-3 items-center justify-center"></div>
      </div>
    </>
  );
}

export default Hero;
