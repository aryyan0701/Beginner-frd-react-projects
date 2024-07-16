import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  return (
    <>
    <div className="flex flex-col items-center justify-center w-full h-screen p-5">
      <Navbar/>
      <Card/>
    </div>
      
    </>
  )
}

export default App