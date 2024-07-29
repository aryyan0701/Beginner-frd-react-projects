import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
     <Route path='/' element={<Signup />}/>
     <Route path='/login' element={<Login />}/>
     <Route path='/dashboard' element={<Dashboard />}/>
    </Routes>
    <ToastContainer />
    </>
  );
}

export default App;
