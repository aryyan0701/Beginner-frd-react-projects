import React from 'react'
import Navbar from './components/Navbar'
import Quiz from './components/Quiz'

function App() {
  return (
    <>
      <Navbar/>
      <h2 className='flex justify-center text-2xl font-sans font-semibold bg-gray-300 p-5'>Quiz</h2>
      <Quiz/>
    </>
  )
}

export default App