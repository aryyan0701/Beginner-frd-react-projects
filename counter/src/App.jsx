import React, { useReducer } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { counterReducer, initialState } from "./Reducer/reducer";
import Model from "./pages/Model";

function App() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={ <Home count={state.count} dispatch={dispatch}/>} />
    <Route path='/model' element={<Model/>} />
    </Routes>
    </>
  );
}

export default App;
