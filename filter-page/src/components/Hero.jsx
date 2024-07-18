import React, { useState } from "react";
import axios from "axios";

function Hero() {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("select options");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.get(
        `https://www.swapi.tech/api/${selectedOption}`
      );
      console.log(res.data.results);
      setData(res.data.results); // Set the results array to data state
    } catch (error) {
      console.log("error to fetch data", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div className="relative w-full h-screen bg-purple-200 dark:bg-gray-900">
        <h2 className="flex w-full h-10 justify-center items-center text-2xl font-semibold dark:text-white">
          Welcome to Page Filtering
        </h2>
        <form
          className="absolute m-5 top-6 right-2 sm:top-4 sm:right-4 flex space-x-2"
          onSubmit={handleSubmit}
        >
          <select
            className="w-30 h-10 p-2 rounded"
            value={selectedOption}
            onChange={handleChange}
          >
            <option value="select options" disabled>
              Select Option
            </option>
            <option value="planets">Planets</option>
            <option value="vehicles">Vehicles</option>
            <option value="people">People</option>
            <option value="starships">Starships</option>
            <option value="species">Species</option>
          </select>
          <button
            type="submit"
            className="p-1 bg-slate-300 text-black rounded-lg"
          >
            {loading === true ? "fetching.." : "Fetch"}
          </button>
        </form>

        {data == "" ? (
         <div className="flex h-screen justify-center items-center">
         <div className="text-2xl font-bold text-black dark:text-white">
           Select the option from above and fetch the data
         </div>
       </div>
        ) : (
          <div className="mt-10 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item) => (
              <div
                key={item.uid}
                className="card bg-base-100 dark:bg-slate-600 dark:text-white w-full shadow-xl"
              >
                <div className="card-body">
                  <h2 className="card-title">{item.name}</h2>
                  <p>
                    URL:{" "}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.url}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Hero;
