import React from 'react'
import ThemeBtn from './ThemeBtn'

function Navbar() {
  return (
    <div className='flex h-14 bg-gray-700 text-blue-400 dark:bg-gray-100 dark:text-black p-3 justify-between'>
        <h2 className='text-2xl font-semibold'>To-do List</h2>
        <ThemeBtn/>
    </div>
  )
}

export default Navbar