import React from 'react'
import ThemeBtn from './ThemeBtn'

function Navbar() {
  return (
    <>
    <nav className='flex w-full h-14 bg-stone-400 dark:bg-slate-900 text-black dark:text-white justify-between p-3 items-center'>
        <h2>Navbar</h2>
        <ThemeBtn/>
    </nav>  
    </>
  )
}

export default Navbar