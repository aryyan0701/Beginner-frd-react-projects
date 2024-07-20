import React, { useReducer, useState } from "react";
import Navbar from "./components/Navbar";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { counterReducer, initialState } from "./Reducer/reducer";

function App() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  

  return (
    <>
      <Navbar />
      <div className="h-screen w-full bg-gray-200">
        <h2 className="flex text-2xl font-serif font-semibold justify-center pt-5">
          Counter App
        </h2>
        <div className="flex w-full justify-center items-start mt-20 space-x-8 text-2xl p-5">
          <button
              onClick={() => dispatch({ type: "DECREMENT"})}
            >
              <CiSquareMinus className="font-semibold" />
            </button>
            <h2 className="text-xl font-serif font-extrabold">{state.count}</h2>
            <button
              onClick={() => dispatch({ type: "INCREMENT"})}
            >
              <CiSquarePlus className="font-semibold" />
            </button>
        </div>
        <div className="flex justify-center">
        <button className="text-md font-serif font-semibold bg-slate-900 text-white p-2 rounded-md" onClick={() => dispatch({ type: "RESET"})}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
