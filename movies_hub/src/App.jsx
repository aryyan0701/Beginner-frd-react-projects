import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Search from './pages/Search'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </>
  )
}

export default App